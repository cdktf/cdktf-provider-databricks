# `workspaceSettingV2` Submodule <a name="`workspaceSettingV2` Submodule" id="@cdktf/provider-databricks.workspaceSettingV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceSettingV2 <a name="WorkspaceSettingV2" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2 databricks_workspace_setting_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2(Construct Scope, string Id, WorkspaceSettingV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config">WorkspaceSettingV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config">WorkspaceSettingV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy">PutAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains">PutAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace">PutAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putBooleanVal">PutBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy">PutEffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains">PutEffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace">PutEffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectivePersonalCompute">PutEffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins">PutEffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putIntegerVal">PutIntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putPersonalCompute">PutPersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putRestrictWorkspaceAdmins">PutRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putStringVal">PutStringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingAccessPolicy">ResetAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingApprovedDomains">ResetAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAutomaticClusterUpdateWorkspace">ResetAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetBooleanVal">ResetBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy">ResetEffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains">ResetEffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace">ResetEffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectivePersonalCompute">ResetEffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveRestrictWorkspaceAdmins">ResetEffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetIntegerVal">ResetIntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetPersonalCompute">ResetPersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetRestrictWorkspaceAdmins">ResetRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetStringVal">ResetStringVal</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAibiDashboardEmbeddingAccessPolicy` <a name="PutAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
private void PutAibiDashboardEmbeddingAccessPolicy(WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---

##### `PutAibiDashboardEmbeddingApprovedDomains` <a name="PutAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
private void PutAibiDashboardEmbeddingApprovedDomains(WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---

##### `PutAutomaticClusterUpdateWorkspace` <a name="PutAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace"></a>

```csharp
private void PutAutomaticClusterUpdateWorkspace(WorkspaceSettingV2AutomaticClusterUpdateWorkspace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

---

##### `PutBooleanVal` <a name="PutBooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putBooleanVal"></a>

```csharp
private void PutBooleanVal(WorkspaceSettingV2BooleanVal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putBooleanVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

---

##### `PutEffectiveAibiDashboardEmbeddingAccessPolicy` <a name="PutEffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
private void PutEffectiveAibiDashboardEmbeddingAccessPolicy(WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---

##### `PutEffectiveAibiDashboardEmbeddingApprovedDomains` <a name="PutEffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
private void PutEffectiveAibiDashboardEmbeddingApprovedDomains(WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---

##### `PutEffectiveAutomaticClusterUpdateWorkspace` <a name="PutEffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace"></a>

```csharp
private void PutEffectiveAutomaticClusterUpdateWorkspace(WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---

##### `PutEffectivePersonalCompute` <a name="PutEffectivePersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectivePersonalCompute"></a>

```csharp
private void PutEffectivePersonalCompute(WorkspaceSettingV2EffectivePersonalCompute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectivePersonalCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

---

##### `PutEffectiveRestrictWorkspaceAdmins` <a name="PutEffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins"></a>

```csharp
private void PutEffectiveRestrictWorkspaceAdmins(WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

---

##### `PutIntegerVal` <a name="PutIntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putIntegerVal"></a>

```csharp
private void PutIntegerVal(WorkspaceSettingV2IntegerVal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putIntegerVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

---

##### `PutPersonalCompute` <a name="PutPersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putPersonalCompute"></a>

```csharp
private void PutPersonalCompute(WorkspaceSettingV2PersonalCompute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putPersonalCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

---

##### `PutRestrictWorkspaceAdmins` <a name="PutRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putRestrictWorkspaceAdmins"></a>

```csharp
private void PutRestrictWorkspaceAdmins(WorkspaceSettingV2RestrictWorkspaceAdmins Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

---

##### `PutStringVal` <a name="PutStringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putStringVal"></a>

```csharp
private void PutStringVal(WorkspaceSettingV2StringVal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putStringVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

---

##### `ResetAibiDashboardEmbeddingAccessPolicy` <a name="ResetAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
private void ResetAibiDashboardEmbeddingAccessPolicy()
```

##### `ResetAibiDashboardEmbeddingApprovedDomains` <a name="ResetAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
private void ResetAibiDashboardEmbeddingApprovedDomains()
```

##### `ResetAutomaticClusterUpdateWorkspace` <a name="ResetAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAutomaticClusterUpdateWorkspace"></a>

```csharp
private void ResetAutomaticClusterUpdateWorkspace()
```

##### `ResetBooleanVal` <a name="ResetBooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetBooleanVal"></a>

```csharp
private void ResetBooleanVal()
```

##### `ResetEffectiveAibiDashboardEmbeddingAccessPolicy` <a name="ResetEffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
private void ResetEffectiveAibiDashboardEmbeddingAccessPolicy()
```

##### `ResetEffectiveAibiDashboardEmbeddingApprovedDomains` <a name="ResetEffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
private void ResetEffectiveAibiDashboardEmbeddingApprovedDomains()
```

##### `ResetEffectiveAutomaticClusterUpdateWorkspace` <a name="ResetEffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace"></a>

```csharp
private void ResetEffectiveAutomaticClusterUpdateWorkspace()
```

##### `ResetEffectivePersonalCompute` <a name="ResetEffectivePersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectivePersonalCompute"></a>

```csharp
private void ResetEffectivePersonalCompute()
```

##### `ResetEffectiveRestrictWorkspaceAdmins` <a name="ResetEffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveRestrictWorkspaceAdmins"></a>

```csharp
private void ResetEffectiveRestrictWorkspaceAdmins()
```

##### `ResetIntegerVal` <a name="ResetIntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetIntegerVal"></a>

```csharp
private void ResetIntegerVal()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPersonalCompute` <a name="ResetPersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetPersonalCompute"></a>

```csharp
private void ResetPersonalCompute()
```

##### `ResetRestrictWorkspaceAdmins` <a name="ResetRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetRestrictWorkspaceAdmins"></a>

```csharp
private void ResetRestrictWorkspaceAdmins()
```

##### `ResetStringVal` <a name="ResetStringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetStringVal"></a>

```csharp
private void ResetStringVal()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceSettingV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

WorkspaceSettingV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

WorkspaceSettingV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

WorkspaceSettingV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

WorkspaceSettingV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkspaceSettingV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceSettingV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceSettingV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceSettingV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanVal">BooleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference">WorkspaceSettingV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy">EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains">EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspace">EffectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveBooleanVal">EffectiveBooleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference">WorkspaceSettingV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveIntegerVal">EffectiveIntegerVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference">WorkspaceSettingV2EffectiveIntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalCompute">EffectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference">WorkspaceSettingV2EffectivePersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdmins">EffectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveStringVal">EffectiveStringVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference">WorkspaceSettingV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerVal">IntegerVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference">WorkspaceSettingV2IntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalCompute">PersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference">WorkspaceSettingV2PersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdmins">RestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringVal">StringVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference">WorkspaceSettingV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput">AibiDashboardEmbeddingAccessPolicyInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput">AibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspaceInput">AutomaticClusterUpdateWorkspaceInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanValInput">BooleanValInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput">EffectiveAibiDashboardEmbeddingAccessPolicyInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput">EffectiveAibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput">EffectiveAutomaticClusterUpdateWorkspaceInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalComputeInput">EffectivePersonalComputeInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdminsInput">EffectiveRestrictWorkspaceAdminsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerValInput">IntegerValInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalComputeInput">PersonalComputeInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdminsInput">RestrictWorkspaceAdminsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringValInput">StringValInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicy"></a>

```csharp
public WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference AibiDashboardEmbeddingAccessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `AibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomains"></a>

```csharp
public WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference AibiDashboardEmbeddingApprovedDomains { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `AutomaticClusterUpdateWorkspace`<sup>Required</sup> <a name="AutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspace"></a>

```csharp
public WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference AutomaticClusterUpdateWorkspace { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `BooleanVal`<sup>Required</sup> <a name="BooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanVal"></a>

```csharp
public WorkspaceSettingV2BooleanValOutputReference BooleanVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference">WorkspaceSettingV2BooleanValOutputReference</a>

---

##### `EffectiveAibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="EffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
public WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference EffectiveAibiDashboardEmbeddingAccessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `EffectiveAibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="EffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
public WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference EffectiveAibiDashboardEmbeddingApprovedDomains { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `EffectiveAutomaticClusterUpdateWorkspace`<sup>Required</sup> <a name="EffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```csharp
public WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference EffectiveAutomaticClusterUpdateWorkspace { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `EffectiveBooleanVal`<sup>Required</sup> <a name="EffectiveBooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveBooleanVal"></a>

```csharp
public WorkspaceSettingV2EffectiveBooleanValOutputReference EffectiveBooleanVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference">WorkspaceSettingV2EffectiveBooleanValOutputReference</a>

---

##### `EffectiveIntegerVal`<sup>Required</sup> <a name="EffectiveIntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveIntegerVal"></a>

```csharp
public WorkspaceSettingV2EffectiveIntegerValOutputReference EffectiveIntegerVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference">WorkspaceSettingV2EffectiveIntegerValOutputReference</a>

---

##### `EffectivePersonalCompute`<sup>Required</sup> <a name="EffectivePersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalCompute"></a>

```csharp
public WorkspaceSettingV2EffectivePersonalComputeOutputReference EffectivePersonalCompute { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference">WorkspaceSettingV2EffectivePersonalComputeOutputReference</a>

---

##### `EffectiveRestrictWorkspaceAdmins`<sup>Required</sup> <a name="EffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdmins"></a>

```csharp
public WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference EffectiveRestrictWorkspaceAdmins { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a>

---

##### `EffectiveStringVal`<sup>Required</sup> <a name="EffectiveStringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveStringVal"></a>

```csharp
public WorkspaceSettingV2EffectiveStringValOutputReference EffectiveStringVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference">WorkspaceSettingV2EffectiveStringValOutputReference</a>

---

##### `IntegerVal`<sup>Required</sup> <a name="IntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerVal"></a>

```csharp
public WorkspaceSettingV2IntegerValOutputReference IntegerVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference">WorkspaceSettingV2IntegerValOutputReference</a>

---

##### `PersonalCompute`<sup>Required</sup> <a name="PersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalCompute"></a>

```csharp
public WorkspaceSettingV2PersonalComputeOutputReference PersonalCompute { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference">WorkspaceSettingV2PersonalComputeOutputReference</a>

---

##### `RestrictWorkspaceAdmins`<sup>Required</sup> <a name="RestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdmins"></a>

```csharp
public WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference RestrictWorkspaceAdmins { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference</a>

---

##### `StringVal`<sup>Required</sup> <a name="StringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringVal"></a>

```csharp
public WorkspaceSettingV2StringValOutputReference StringVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference">WorkspaceSettingV2StringValOutputReference</a>

---

##### `AibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="AibiDashboardEmbeddingAccessPolicyInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy AibiDashboardEmbeddingAccessPolicyInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---

##### `AibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="AibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains AibiDashboardEmbeddingApprovedDomainsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---

##### `AutomaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="AutomaticClusterUpdateWorkspaceInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspaceInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2AutomaticClusterUpdateWorkspace AutomaticClusterUpdateWorkspaceInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

---

##### `BooleanValInput`<sup>Optional</sup> <a name="BooleanValInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanValInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2BooleanVal BooleanValInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

---

##### `EffectiveAibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="EffectiveAibiDashboardEmbeddingAccessPolicyInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy EffectiveAibiDashboardEmbeddingAccessPolicyInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---

##### `EffectiveAibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="EffectiveAibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains EffectiveAibiDashboardEmbeddingApprovedDomainsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---

##### `EffectiveAutomaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="EffectiveAutomaticClusterUpdateWorkspaceInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace EffectiveAutomaticClusterUpdateWorkspaceInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---

##### `EffectivePersonalComputeInput`<sup>Optional</sup> <a name="EffectivePersonalComputeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalComputeInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectivePersonalCompute EffectivePersonalComputeInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

---

##### `EffectiveRestrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="EffectiveRestrictWorkspaceAdminsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdminsInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins EffectiveRestrictWorkspaceAdminsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

---

##### `IntegerValInput`<sup>Optional</sup> <a name="IntegerValInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerValInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2IntegerVal IntegerValInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PersonalComputeInput`<sup>Optional</sup> <a name="PersonalComputeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalComputeInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2PersonalCompute PersonalComputeInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

---

##### `RestrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="RestrictWorkspaceAdminsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdminsInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2RestrictWorkspaceAdmins RestrictWorkspaceAdminsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

---

##### `StringValInput`<sup>Optional</sup> <a name="StringValInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringValInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2StringVal StringValInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy <a name="WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy {
    string AccessPolicyType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">AccessPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}. |

---

##### `AccessPolicyType`<sup>Required</sup> <a name="AccessPolicyType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```csharp
public string AccessPolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}.

---

### WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains <a name="WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains {
    string[] ApprovedDomains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains">ApprovedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}. |

---

##### `ApprovedDomains`<sup>Optional</sup> <a name="ApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```csharp
public string[] ApprovedDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspace <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AutomaticClusterUpdateWorkspace {
    bool|IResolvable CanToggle = null,
    bool|IResolvable Enabled = null,
    WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails EnablementDetails = null,
    WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindow = null,
    bool|IResolvable RestartEvenIfNoUpdatesAvailable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.canToggle">CanToggle</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails">EnablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}. |

---

##### `CanToggle`<sup>Optional</sup> <a name="CanToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.canToggle"></a>

```csharp
public bool|IResolvable CanToggle { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}.

---

##### `EnablementDetails`<sup>Optional</sup> <a name="EnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```csharp
public WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails EnablementDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```csharp
public WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}.

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```csharp
public bool|IResolvable RestartEvenIfNoUpdatesAvailable { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails {
    bool|IResolvable ForcedForComplianceMode = null,
    bool|IResolvable UnavailableForDisabledEntitlement = null,
    bool|IResolvable UnavailableForNonEnterpriseTier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">ForcedForComplianceMode</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">UnavailableForDisabledEntitlement</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">UnavailableForNonEnterpriseTier</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `ForcedForComplianceMode`<sup>Optional</sup> <a name="ForcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```csharp
public bool|IResolvable ForcedForComplianceMode { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}.

---

##### `UnavailableForDisabledEntitlement`<sup>Optional</sup> <a name="UnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```csharp
public bool|IResolvable UnavailableForDisabledEntitlement { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}.

---

##### `UnavailableForNonEnterpriseTier`<sup>Optional</sup> <a name="UnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```csharp
public bool|IResolvable UnavailableForNonEnterpriseTier { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow {
    WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedSchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}. |

---

##### `WeekDayBasedSchedule`<sup>Optional</sup> <a name="WeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```csharp
public WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
    string DayOfWeek = null,
    string Frequency = null,
    WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}. |

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}.

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}.

---

##### `WindowStartTime`<sup>Optional</sup> <a name="WindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```csharp
public WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
    double Hours = null,
    double Minutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">Hours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">Minutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}.

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}.

---

### WorkspaceSettingV2BooleanVal <a name="WorkspaceSettingV2BooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2BooleanVal {
    bool|IResolvable Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal.property.value">Value</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal.property.value"></a>

```csharp
public bool|IResolvable Value { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2Config <a name="WorkspaceSettingV2Config" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy AibiDashboardEmbeddingAccessPolicy = null,
    WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains AibiDashboardEmbeddingApprovedDomains = null,
    WorkspaceSettingV2AutomaticClusterUpdateWorkspace AutomaticClusterUpdateWorkspace = null,
    WorkspaceSettingV2BooleanVal BooleanVal = null,
    WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy EffectiveAibiDashboardEmbeddingAccessPolicy = null,
    WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains EffectiveAibiDashboardEmbeddingApprovedDomains = null,
    WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace EffectiveAutomaticClusterUpdateWorkspace = null,
    WorkspaceSettingV2EffectivePersonalCompute EffectivePersonalCompute = null,
    WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins EffectiveRestrictWorkspaceAdmins = null,
    WorkspaceSettingV2IntegerVal IntegerVal = null,
    string Name = null,
    WorkspaceSettingV2PersonalCompute PersonalCompute = null,
    WorkspaceSettingV2RestrictWorkspaceAdmins RestrictWorkspaceAdmins = null,
    WorkspaceSettingV2StringVal StringVal = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_access_policy WorkspaceSettingV2#aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.automaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#automatic_cluster_update_workspace WorkspaceSettingV2#automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.booleanVal">BooleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#boolean_val WorkspaceSettingV2#boolean_val}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy">EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_access_policy WorkspaceSettingV2#effective_aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains">EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#effective_aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace">EffectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_automatic_cluster_update_workspace WorkspaceSettingV2#effective_automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectivePersonalCompute">EffectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_personal_compute WorkspaceSettingV2#effective_personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveRestrictWorkspaceAdmins">EffectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_restrict_workspace_admins WorkspaceSettingV2#effective_restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.integerVal">IntegerVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#integer_val WorkspaceSettingV2#integer_val}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#name WorkspaceSettingV2#name}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.personalCompute">PersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#personal_compute WorkspaceSettingV2#personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.restrictWorkspaceAdmins">RestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restrict_workspace_admins WorkspaceSettingV2#restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.stringVal">StringVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#string_val WorkspaceSettingV2#string_val}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy"></a>

```csharp
public WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy AibiDashboardEmbeddingAccessPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_access_policy WorkspaceSettingV2#aibi_dashboard_embedding_access_policy}.

---

##### `AibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains"></a>

```csharp
public WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains AibiDashboardEmbeddingApprovedDomains { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#aibi_dashboard_embedding_approved_domains}.

---

##### `AutomaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="AutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.automaticClusterUpdateWorkspace"></a>

```csharp
public WorkspaceSettingV2AutomaticClusterUpdateWorkspace AutomaticClusterUpdateWorkspace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#automatic_cluster_update_workspace WorkspaceSettingV2#automatic_cluster_update_workspace}.

---

##### `BooleanVal`<sup>Optional</sup> <a name="BooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.booleanVal"></a>

```csharp
public WorkspaceSettingV2BooleanVal BooleanVal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#boolean_val WorkspaceSettingV2#boolean_val}.

---

##### `EffectiveAibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="EffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
public WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy EffectiveAibiDashboardEmbeddingAccessPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_access_policy WorkspaceSettingV2#effective_aibi_dashboard_embedding_access_policy}.

---

##### `EffectiveAibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="EffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
public WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains EffectiveAibiDashboardEmbeddingApprovedDomains { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#effective_aibi_dashboard_embedding_approved_domains}.

---

##### `EffectiveAutomaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="EffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```csharp
public WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace EffectiveAutomaticClusterUpdateWorkspace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_automatic_cluster_update_workspace WorkspaceSettingV2#effective_automatic_cluster_update_workspace}.

---

##### `EffectivePersonalCompute`<sup>Optional</sup> <a name="EffectivePersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectivePersonalCompute"></a>

```csharp
public WorkspaceSettingV2EffectivePersonalCompute EffectivePersonalCompute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_personal_compute WorkspaceSettingV2#effective_personal_compute}.

---

##### `EffectiveRestrictWorkspaceAdmins`<sup>Optional</sup> <a name="EffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveRestrictWorkspaceAdmins"></a>

```csharp
public WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins EffectiveRestrictWorkspaceAdmins { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_restrict_workspace_admins WorkspaceSettingV2#effective_restrict_workspace_admins}.

---

##### `IntegerVal`<sup>Optional</sup> <a name="IntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.integerVal"></a>

```csharp
public WorkspaceSettingV2IntegerVal IntegerVal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#integer_val WorkspaceSettingV2#integer_val}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#name WorkspaceSettingV2#name}.

---

##### `PersonalCompute`<sup>Optional</sup> <a name="PersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.personalCompute"></a>

```csharp
public WorkspaceSettingV2PersonalCompute PersonalCompute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#personal_compute WorkspaceSettingV2#personal_compute}.

---

##### `RestrictWorkspaceAdmins`<sup>Optional</sup> <a name="RestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.restrictWorkspaceAdmins"></a>

```csharp
public WorkspaceSettingV2RestrictWorkspaceAdmins RestrictWorkspaceAdmins { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restrict_workspace_admins WorkspaceSettingV2#restrict_workspace_admins}.

---

##### `StringVal`<sup>Optional</sup> <a name="StringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.stringVal"></a>

```csharp
public WorkspaceSettingV2StringVal StringVal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#string_val WorkspaceSettingV2#string_val}.

---

### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy {
    string AccessPolicyType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">AccessPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}. |

---

##### `AccessPolicyType`<sup>Required</sup> <a name="AccessPolicyType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```csharp
public string AccessPolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}.

---

### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains {
    string[] ApprovedDomains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains">ApprovedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}. |

---

##### `ApprovedDomains`<sup>Optional</sup> <a name="ApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```csharp
public string[] ApprovedDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace {
    bool|IResolvable CanToggle = null,
    bool|IResolvable Enabled = null,
    WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails EnablementDetails = null,
    WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindow = null,
    bool|IResolvable RestartEvenIfNoUpdatesAvailable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle">CanToggle</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails">EnablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}. |

---

##### `CanToggle`<sup>Optional</sup> <a name="CanToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle"></a>

```csharp
public bool|IResolvable CanToggle { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}.

---

##### `EnablementDetails`<sup>Optional</sup> <a name="EnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```csharp
public WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails EnablementDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```csharp
public WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}.

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```csharp
public bool|IResolvable RestartEvenIfNoUpdatesAvailable { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails {
    bool|IResolvable ForcedForComplianceMode = null,
    bool|IResolvable UnavailableForDisabledEntitlement = null,
    bool|IResolvable UnavailableForNonEnterpriseTier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">ForcedForComplianceMode</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">UnavailableForDisabledEntitlement</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">UnavailableForNonEnterpriseTier</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `ForcedForComplianceMode`<sup>Optional</sup> <a name="ForcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```csharp
public bool|IResolvable ForcedForComplianceMode { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}.

---

##### `UnavailableForDisabledEntitlement`<sup>Optional</sup> <a name="UnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```csharp
public bool|IResolvable UnavailableForDisabledEntitlement { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}.

---

##### `UnavailableForNonEnterpriseTier`<sup>Optional</sup> <a name="UnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```csharp
public bool|IResolvable UnavailableForNonEnterpriseTier { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow {
    WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedSchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}. |

---

##### `WeekDayBasedSchedule`<sup>Optional</sup> <a name="WeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```csharp
public WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
    string DayOfWeek = null,
    string Frequency = null,
    WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}. |

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}.

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}.

---

##### `WindowStartTime`<sup>Optional</sup> <a name="WindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```csharp
public WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
    double Hours = null,
    double Minutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">Hours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">Minutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}.

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}.

---

### WorkspaceSettingV2EffectiveBooleanVal <a name="WorkspaceSettingV2EffectiveBooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveBooleanVal {
    bool|IResolvable Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal.property.value">Value</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal.property.value"></a>

```csharp
public bool|IResolvable Value { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2EffectiveIntegerVal <a name="WorkspaceSettingV2EffectiveIntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveIntegerVal {
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2EffectivePersonalCompute <a name="WorkspaceSettingV2EffectivePersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectivePersonalCompute {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins <a name="WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}.

---

### WorkspaceSettingV2EffectiveStringVal <a name="WorkspaceSettingV2EffectiveStringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveStringVal {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2IntegerVal <a name="WorkspaceSettingV2IntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2IntegerVal {
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2PersonalCompute <a name="WorkspaceSettingV2PersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2PersonalCompute {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2RestrictWorkspaceAdmins <a name="WorkspaceSettingV2RestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2RestrictWorkspaceAdmins {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}.

---

### WorkspaceSettingV2StringVal <a name="WorkspaceSettingV2StringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2StringVal {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference <a name="WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">AccessPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">AccessPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessPolicyTypeInput`<sup>Optional</sup> <a name="AccessPolicyTypeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```csharp
public string AccessPolicyTypeInput { get; }
```

- *Type:* string

---

##### `AccessPolicyType`<sup>Required</sup> <a name="AccessPolicyType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```csharp
public string AccessPolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---


### WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference <a name="WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">ResetApprovedDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApprovedDomains` <a name="ResetApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```csharp
private void ResetApprovedDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">ApprovedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">ApprovedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovedDomainsInput`<sup>Optional</sup> <a name="ApprovedDomainsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```csharp
public string[] ApprovedDomainsInput { get; }
```

- *Type:* string[]

---

##### `ApprovedDomains`<sup>Required</sup> <a name="ApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```csharp
public string[] ApprovedDomains { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">ResetForcedForComplianceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">ResetUnavailableForDisabledEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">ResetUnavailableForNonEnterpriseTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForcedForComplianceMode` <a name="ResetForcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```csharp
private void ResetForcedForComplianceMode()
```

##### `ResetUnavailableForDisabledEntitlement` <a name="ResetUnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```csharp
private void ResetUnavailableForDisabledEntitlement()
```

##### `ResetUnavailableForNonEnterpriseTier` <a name="ResetUnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```csharp
private void ResetUnavailableForNonEnterpriseTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">ForcedForComplianceModeInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">UnavailableForDisabledEntitlementInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">UnavailableForNonEnterpriseTierInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">ForcedForComplianceMode</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">UnavailableForDisabledEntitlement</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">UnavailableForNonEnterpriseTier</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForcedForComplianceModeInput`<sup>Optional</sup> <a name="ForcedForComplianceModeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```csharp
public bool|IResolvable ForcedForComplianceModeInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UnavailableForDisabledEntitlementInput`<sup>Optional</sup> <a name="UnavailableForDisabledEntitlementInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```csharp
public bool|IResolvable UnavailableForDisabledEntitlementInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UnavailableForNonEnterpriseTierInput`<sup>Optional</sup> <a name="UnavailableForNonEnterpriseTierInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```csharp
public bool|IResolvable UnavailableForNonEnterpriseTierInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ForcedForComplianceMode`<sup>Required</sup> <a name="ForcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```csharp
public bool|IResolvable ForcedForComplianceMode { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UnavailableForDisabledEntitlement`<sup>Required</sup> <a name="UnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```csharp
public bool|IResolvable UnavailableForDisabledEntitlement { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UnavailableForNonEnterpriseTier`<sup>Required</sup> <a name="UnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```csharp
public bool|IResolvable UnavailableForNonEnterpriseTier { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">PutWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">ResetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeekDayBasedSchedule` <a name="PutWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```csharp
private void PutWeekDayBasedSchedule(WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `ResetWeekDayBasedSchedule` <a name="ResetWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```csharp
private void ResetWeekDayBasedSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">WeekDayBasedScheduleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeekDayBasedSchedule`<sup>Required</sup> <a name="WeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```csharp
public WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference WeekDayBasedSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `WeekDayBasedScheduleInput`<sup>Optional</sup> <a name="WeekDayBasedScheduleInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedScheduleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">PutWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">ResetWindowStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindowStartTime` <a name="PutWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```csharp
private void PutWindowStartTime(WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```csharp
private void ResetDayOfWeek()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetWindowStartTime` <a name="ResetWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```csharp
private void ResetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">WindowStartTimeInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```csharp
public WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference WindowStartTime { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `WindowStartTimeInput`<sup>Optional</sup> <a name="WindowStartTimeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTimeInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">PutEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">ResetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">ResetEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">ResetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnablementDetails` <a name="PutEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```csharp
private void PutEnablementDetails(WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `ResetCanToggle` <a name="ResetCanToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```csharp
private void ResetCanToggle()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnablementDetails` <a name="ResetEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```csharp
private void ResetEnablementDetails()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetRestartEvenIfNoUpdatesAvailable` <a name="ResetRestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```csharp
private void ResetRestartEvenIfNoUpdatesAvailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">EnablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">CanToggleInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">EnablementDetailsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">RestartEvenIfNoUpdatesAvailableInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">CanToggle</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnablementDetails`<sup>Required</sup> <a name="EnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```csharp
public WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference EnablementDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```csharp
public WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `CanToggleInput`<sup>Optional</sup> <a name="CanToggleInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```csharp
public bool|IResolvable CanToggleInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnablementDetailsInput`<sup>Optional</sup> <a name="EnablementDetailsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails EnablementDetailsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `RestartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailableInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```csharp
public bool|IResolvable RestartEvenIfNoUpdatesAvailableInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CanToggle`<sup>Required</sup> <a name="CanToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```csharp
public bool|IResolvable CanToggle { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```csharp
public bool|IResolvable RestartEvenIfNoUpdatesAvailable { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2AutomaticClusterUpdateWorkspace InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

---


### WorkspaceSettingV2BooleanValOutputReference <a name="WorkspaceSettingV2BooleanValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2BooleanValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.valueInput">ValueInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.value">Value</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.valueInput"></a>

```csharp
public bool|IResolvable ValueInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.value"></a>

```csharp
public bool|IResolvable Value { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2BooleanVal InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

---


### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">AccessPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">AccessPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessPolicyTypeInput`<sup>Optional</sup> <a name="AccessPolicyTypeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```csharp
public string AccessPolicyTypeInput { get; }
```

- *Type:* string

---

##### `AccessPolicyType`<sup>Required</sup> <a name="AccessPolicyType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```csharp
public string AccessPolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---


### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">ResetApprovedDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApprovedDomains` <a name="ResetApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```csharp
private void ResetApprovedDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">ApprovedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">ApprovedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovedDomainsInput`<sup>Optional</sup> <a name="ApprovedDomainsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```csharp
public string[] ApprovedDomainsInput { get; }
```

- *Type:* string[]

---

##### `ApprovedDomains`<sup>Required</sup> <a name="ApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```csharp
public string[] ApprovedDomains { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">ResetForcedForComplianceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">ResetUnavailableForDisabledEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">ResetUnavailableForNonEnterpriseTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForcedForComplianceMode` <a name="ResetForcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```csharp
private void ResetForcedForComplianceMode()
```

##### `ResetUnavailableForDisabledEntitlement` <a name="ResetUnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```csharp
private void ResetUnavailableForDisabledEntitlement()
```

##### `ResetUnavailableForNonEnterpriseTier` <a name="ResetUnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```csharp
private void ResetUnavailableForNonEnterpriseTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">ForcedForComplianceModeInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">UnavailableForDisabledEntitlementInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">UnavailableForNonEnterpriseTierInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">ForcedForComplianceMode</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">UnavailableForDisabledEntitlement</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">UnavailableForNonEnterpriseTier</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForcedForComplianceModeInput`<sup>Optional</sup> <a name="ForcedForComplianceModeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```csharp
public bool|IResolvable ForcedForComplianceModeInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UnavailableForDisabledEntitlementInput`<sup>Optional</sup> <a name="UnavailableForDisabledEntitlementInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```csharp
public bool|IResolvable UnavailableForDisabledEntitlementInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UnavailableForNonEnterpriseTierInput`<sup>Optional</sup> <a name="UnavailableForNonEnterpriseTierInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```csharp
public bool|IResolvable UnavailableForNonEnterpriseTierInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ForcedForComplianceMode`<sup>Required</sup> <a name="ForcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```csharp
public bool|IResolvable ForcedForComplianceMode { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UnavailableForDisabledEntitlement`<sup>Required</sup> <a name="UnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```csharp
public bool|IResolvable UnavailableForDisabledEntitlement { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UnavailableForNonEnterpriseTier`<sup>Required</sup> <a name="UnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```csharp
public bool|IResolvable UnavailableForNonEnterpriseTier { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">PutWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">ResetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeekDayBasedSchedule` <a name="PutWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```csharp
private void PutWeekDayBasedSchedule(WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `ResetWeekDayBasedSchedule` <a name="ResetWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```csharp
private void ResetWeekDayBasedSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">WeekDayBasedScheduleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeekDayBasedSchedule`<sup>Required</sup> <a name="WeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```csharp
public WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference WeekDayBasedSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `WeekDayBasedScheduleInput`<sup>Optional</sup> <a name="WeekDayBasedScheduleInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedScheduleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">PutWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">ResetWindowStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindowStartTime` <a name="PutWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```csharp
private void PutWindowStartTime(WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```csharp
private void ResetDayOfWeek()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetWindowStartTime` <a name="ResetWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```csharp
private void ResetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">WindowStartTimeInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```csharp
public WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference WindowStartTime { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `WindowStartTimeInput`<sup>Optional</sup> <a name="WindowStartTimeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTimeInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">PutEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">ResetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">ResetEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">ResetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnablementDetails` <a name="PutEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```csharp
private void PutEnablementDetails(WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `ResetCanToggle` <a name="ResetCanToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```csharp
private void ResetCanToggle()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnablementDetails` <a name="ResetEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```csharp
private void ResetEnablementDetails()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetRestartEvenIfNoUpdatesAvailable` <a name="ResetRestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```csharp
private void ResetRestartEvenIfNoUpdatesAvailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">EnablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">CanToggleInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">EnablementDetailsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">RestartEvenIfNoUpdatesAvailableInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">CanToggle</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnablementDetails`<sup>Required</sup> <a name="EnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```csharp
public WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference EnablementDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```csharp
public WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `CanToggleInput`<sup>Optional</sup> <a name="CanToggleInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```csharp
public bool|IResolvable CanToggleInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnablementDetailsInput`<sup>Optional</sup> <a name="EnablementDetailsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails EnablementDetailsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `RestartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailableInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```csharp
public bool|IResolvable RestartEvenIfNoUpdatesAvailableInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CanToggle`<sup>Required</sup> <a name="CanToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```csharp
public bool|IResolvable CanToggle { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```csharp
public bool|IResolvable RestartEvenIfNoUpdatesAvailable { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---


### WorkspaceSettingV2EffectiveBooleanValOutputReference <a name="WorkspaceSettingV2EffectiveBooleanValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveBooleanValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.valueInput">ValueInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.value">Value</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal">WorkspaceSettingV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```csharp
public bool|IResolvable ValueInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.value"></a>

```csharp
public bool|IResolvable Value { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```csharp
public WorkspaceSettingV2EffectiveBooleanVal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal">WorkspaceSettingV2EffectiveBooleanVal</a>

---


### WorkspaceSettingV2EffectiveIntegerValOutputReference <a name="WorkspaceSettingV2EffectiveIntegerValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveIntegerValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal">WorkspaceSettingV2EffectiveIntegerVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.internalValue"></a>

```csharp
public WorkspaceSettingV2EffectiveIntegerVal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal">WorkspaceSettingV2EffectiveIntegerVal</a>

---


### WorkspaceSettingV2EffectivePersonalComputeOutputReference <a name="WorkspaceSettingV2EffectivePersonalComputeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectivePersonalComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectivePersonalCompute InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

---


### WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference <a name="WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

---


### WorkspaceSettingV2EffectiveStringValOutputReference <a name="WorkspaceSettingV2EffectiveStringValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2EffectiveStringValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal">WorkspaceSettingV2EffectiveStringVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.internalValue"></a>

```csharp
public WorkspaceSettingV2EffectiveStringVal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal">WorkspaceSettingV2EffectiveStringVal</a>

---


### WorkspaceSettingV2IntegerValOutputReference <a name="WorkspaceSettingV2IntegerValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2IntegerValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2IntegerVal InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

---


### WorkspaceSettingV2PersonalComputeOutputReference <a name="WorkspaceSettingV2PersonalComputeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2PersonalComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2PersonalCompute InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

---


### WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference <a name="WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2RestrictWorkspaceAdmins InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

---


### WorkspaceSettingV2StringValOutputReference <a name="WorkspaceSettingV2StringValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceSettingV2StringValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceSettingV2StringVal InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

---



