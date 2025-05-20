# `disableLegacyAccessSetting` Submodule <a name="`disableLegacyAccessSetting` Submodule" id="@cdktf/provider-databricks.disableLegacyAccessSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisableLegacyAccessSetting <a name="DisableLegacyAccessSetting" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/disable_legacy_access_setting databricks_disable_legacy_access_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DisableLegacyAccessSetting(Construct Scope, string Id, DisableLegacyAccessSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig">DisableLegacyAccessSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig">DisableLegacyAccessSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putDisableLegacyAccess">PutDisableLegacyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDisableLegacyAccess` <a name="PutDisableLegacyAccess" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putDisableLegacyAccess"></a>

```csharp
private void PutDisableLegacyAccess(DisableLegacyAccessSettingDisableLegacyAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putDisableLegacyAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetSettingName"></a>

```csharp
private void ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DisableLegacyAccessSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DisableLegacyAccessSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DisableLegacyAccessSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DisableLegacyAccessSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DisableLegacyAccessSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DisableLegacyAccessSetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisableLegacyAccessSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisableLegacyAccessSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/disable_legacy_access_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DisableLegacyAccessSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccess">DisableLegacyAccess</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference">DisableLegacyAccessSettingDisableLegacyAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccessInput">DisableLegacyAccessInput</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingNameInput">SettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingName">SettingName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DisableLegacyAccess`<sup>Required</sup> <a name="DisableLegacyAccess" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccess"></a>

```csharp
public DisableLegacyAccessSettingDisableLegacyAccessOutputReference DisableLegacyAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference">DisableLegacyAccessSettingDisableLegacyAccessOutputReference</a>

---

##### `DisableLegacyAccessInput`<sup>Optional</sup> <a name="DisableLegacyAccessInput" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccessInput"></a>

```csharp
public DisableLegacyAccessSettingDisableLegacyAccess DisableLegacyAccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingNameInput"></a>

```csharp
public string SettingNameInput { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingName"></a>

```csharp
public string SettingName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisableLegacyAccessSettingConfig <a name="DisableLegacyAccessSettingConfig" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DisableLegacyAccessSettingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DisableLegacyAccessSettingDisableLegacyAccess DisableLegacyAccess,
    string Etag = null,
    string Id = null,
    string SettingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.disableLegacyAccess">DisableLegacyAccess</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a></code> | disable_legacy_access block. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/disable_legacy_access_setting#etag DisableLegacyAccessSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/disable_legacy_access_setting#id DisableLegacyAccessSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.settingName">SettingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/disable_legacy_access_setting#setting_name DisableLegacyAccessSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisableLegacyAccess`<sup>Required</sup> <a name="DisableLegacyAccess" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.disableLegacyAccess"></a>

```csharp
public DisableLegacyAccessSettingDisableLegacyAccess DisableLegacyAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

disable_legacy_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/disable_legacy_access_setting#disable_legacy_access DisableLegacyAccessSetting#disable_legacy_access}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/disable_legacy_access_setting#etag DisableLegacyAccessSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/disable_legacy_access_setting#id DisableLegacyAccessSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.settingName"></a>

```csharp
public string SettingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/disable_legacy_access_setting#setting_name DisableLegacyAccessSetting#setting_name}.

---

### DisableLegacyAccessSettingDisableLegacyAccess <a name="DisableLegacyAccessSettingDisableLegacyAccess" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DisableLegacyAccessSettingDisableLegacyAccess {
    object Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess.property.value">Value</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/disable_legacy_access_setting#value DisableLegacyAccessSetting#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess.property.value"></a>

```csharp
public object Value { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/disable_legacy_access_setting#value DisableLegacyAccessSetting#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisableLegacyAccessSettingDisableLegacyAccessOutputReference <a name="DisableLegacyAccessSettingDisableLegacyAccessOutputReference" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DisableLegacyAccessSettingDisableLegacyAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.value">Value</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.value"></a>

```csharp
public object Value { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.internalValue"></a>

```csharp
public DisableLegacyAccessSettingDisableLegacyAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

---



