# `aibiDashboardEmbeddingApprovedDomainsSetting` Submodule <a name="`aibiDashboardEmbeddingApprovedDomainsSetting` Submodule" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AibiDashboardEmbeddingApprovedDomainsSetting <a name="AibiDashboardEmbeddingApprovedDomainsSetting" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting databricks_aibi_dashboard_embedding_approved_domains_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AibiDashboardEmbeddingApprovedDomainsSetting(Construct Scope, string Id, AibiDashboardEmbeddingApprovedDomainsSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig">AibiDashboardEmbeddingApprovedDomainsSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig">AibiDashboardEmbeddingApprovedDomainsSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains">PutAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAibiDashboardEmbeddingApprovedDomains` <a name="PutAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
private void PutAibiDashboardEmbeddingApprovedDomains(AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetSettingName"></a>

```csharp
private void ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AibiDashboardEmbeddingApprovedDomainsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AibiDashboardEmbeddingApprovedDomainsSetting.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AibiDashboardEmbeddingApprovedDomainsSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AibiDashboardEmbeddingApprovedDomainsSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AibiDashboardEmbeddingApprovedDomainsSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AibiDashboardEmbeddingApprovedDomainsSetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AibiDashboardEmbeddingApprovedDomainsSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AibiDashboardEmbeddingApprovedDomainsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AibiDashboardEmbeddingApprovedDomainsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomainsInput">AibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingNameInput">SettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingName">SettingName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomains"></a>

```csharp
public AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference AibiDashboardEmbeddingApprovedDomains { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `AibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="AibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomainsInput"></a>

```csharp
public AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains AibiDashboardEmbeddingApprovedDomainsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingNameInput"></a>

```csharp
public string SettingNameInput { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingName"></a>

```csharp
public string SettingName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains <a name="AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains {
    string[] ApprovedDomains
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.property.approvedDomains">ApprovedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#approved_domains}. |

---

##### `ApprovedDomains`<sup>Required</sup> <a name="ApprovedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```csharp
public string[] ApprovedDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#approved_domains}.

---

### AibiDashboardEmbeddingApprovedDomainsSettingConfig <a name="AibiDashboardEmbeddingApprovedDomainsSettingConfig" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AibiDashboardEmbeddingApprovedDomainsSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains AibiDashboardEmbeddingApprovedDomains,
    string Etag = null,
    string Id = null,
    string SettingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.aibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | aibi_dashboard_embedding_approved_domains block. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#etag AibiDashboardEmbeddingApprovedDomainsSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#id AibiDashboardEmbeddingApprovedDomainsSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.settingName">SettingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#setting_name AibiDashboardEmbeddingApprovedDomainsSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.aibiDashboardEmbeddingApprovedDomains"></a>

```csharp
public AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains AibiDashboardEmbeddingApprovedDomains { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

aibi_dashboard_embedding_approved_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#aibi_dashboard_embedding_approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#aibi_dashboard_embedding_approved_domains}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#etag AibiDashboardEmbeddingApprovedDomainsSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#id AibiDashboardEmbeddingApprovedDomainsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.settingName"></a>

```csharp
public string SettingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#setting_name AibiDashboardEmbeddingApprovedDomainsSetting#setting_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference <a name="AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">ApprovedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">ApprovedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovedDomainsInput`<sup>Optional</sup> <a name="ApprovedDomainsInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```csharp
public string[] ApprovedDomainsInput { get; }
```

- *Type:* string[]

---

##### `ApprovedDomains`<sup>Required</sup> <a name="ApprovedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```csharp
public string[] ApprovedDomains { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```csharp
public AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

---



