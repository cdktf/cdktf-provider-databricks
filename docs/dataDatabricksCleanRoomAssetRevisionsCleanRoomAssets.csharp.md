# `dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets` Submodule <a name="`dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets databricks_clean_room_asset_revisions_clean_room_assets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets(Construct Scope, string Id, DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.revisions">Revisions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Revisions`<sup>Required</sup> <a name="Revisions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.revisions"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList Revisions { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#workspace_id DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#workspace_id DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#workspace_id}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions {
    string AssetType,
    string Name,
    string CleanRoomName = null,
    DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable ForeignTable = null,
    DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails ForeignTableLocalDetails = null,
    DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook Notebook = null,
    DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable Table = null,
    DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails TableLocalDetails = null,
    DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView View = null,
    DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails ViewLocalDetails = null,
    DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails VolumeLocalDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.assetType">AssetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#asset_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#clean_room_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.foreignTable">ForeignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#foreign_table DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.foreignTableLocalDetails">ForeignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#foreign_table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#notebook DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#notebook}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#table DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.tableLocalDetails">TableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.view">View</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#view DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#view}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.viewLocalDetails">ViewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#view_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.volumeLocalDetails">VolumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#volume_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#volume_local_details}. |

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.assetType"></a>

```csharp
public string AssetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#asset_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#asset_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}.

---

##### `CleanRoomName`<sup>Optional</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#clean_room_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#clean_room_name}.

---

##### `ForeignTable`<sup>Optional</sup> <a name="ForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.foreignTable"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable ForeignTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#foreign_table DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#foreign_table}.

---

##### `ForeignTableLocalDetails`<sup>Optional</sup> <a name="ForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.foreignTableLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails ForeignTableLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#foreign_table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#foreign_table_local_details}.

---

##### `Notebook`<sup>Optional</sup> <a name="Notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.notebook"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook Notebook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#notebook DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#notebook}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.table"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable Table { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#table DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#table}.

---

##### `TableLocalDetails`<sup>Optional</sup> <a name="TableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.tableLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails TableLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#table_local_details}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.view"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView View { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#view DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#view}.

---

##### `ViewLocalDetails`<sup>Optional</sup> <a name="ViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.viewLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails ViewLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#view_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#view_local_details}.

---

##### `VolumeLocalDetails`<sup>Optional</sup> <a name="VolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions.property.volumeLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails VolumeLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#volume_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#volume_local_details}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable {

};
```


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns {
    string Comment = null,
    DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask Mask = null,
    string Name = null,
    object Nullable = null,
    double PartitionIndex = null,
    double Position = null,
    string TypeIntervalType = null,
    string TypeJson = null,
    string TypeName = null,
    double TypePrecision = null,
    double TypeScale = null,
    string TypeText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.nullable">Nullable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typeJson">TypeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typeName">TypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typePrecision">TypePrecision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typeScale">TypeScale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typeText">TypeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask Mask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.nullable"></a>

```csharp
public object Nullable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typeJson"></a>

```csharp
public string TypeJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typePrecision"></a>

```csharp
public double TypePrecision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typeScale"></a>

```csharp
public double TypeScale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns.property.typeText"></a>

```csharp
public string TypeText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_text}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask {
    string FunctionName = null,
    string[] UsingColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#using_column_names}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails {
    string LocalName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook {
    string NotebookContent,
    string[] RunnerCollaboratorAliases = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook.property.notebookContent">NotebookContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#notebook_content DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#notebook_content}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook.property.runnerCollaboratorAliases">RunnerCollaboratorAliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#runner_collaborator_aliases DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#runner_collaborator_aliases}. |

---

##### `NotebookContent`<sup>Required</sup> <a name="NotebookContent" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook.property.notebookContent"></a>

```csharp
public string NotebookContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#notebook_content DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#notebook_content}.

---

##### `RunnerCollaboratorAliases`<sup>Optional</sup> <a name="RunnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook.property.runnerCollaboratorAliases"></a>

```csharp
public string[] RunnerCollaboratorAliases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#runner_collaborator_aliases DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#runner_collaborator_aliases}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews {
    string Comment = null,
    double CreatedAtMillis = null,
    string ReviewerCollaboratorAlias = null,
    string ReviewState = null,
    string ReviewSubReason = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews.property.createdAtMillis">CreatedAtMillis</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#created_at_millis DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#created_at_millis}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews.property.reviewerCollaboratorAlias">ReviewerCollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#reviewer_collaborator_alias DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#reviewer_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews.property.reviewState">ReviewState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#review_state DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#review_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews.property.reviewSubReason">ReviewSubReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#review_sub_reason DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#review_sub_reason}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}.

---

##### `CreatedAtMillis`<sup>Optional</sup> <a name="CreatedAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews.property.createdAtMillis"></a>

```csharp
public double CreatedAtMillis { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#created_at_millis DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#created_at_millis}.

---

##### `ReviewerCollaboratorAlias`<sup>Optional</sup> <a name="ReviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews.property.reviewerCollaboratorAlias"></a>

```csharp
public string ReviewerCollaboratorAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#reviewer_collaborator_alias DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#reviewer_collaborator_alias}.

---

##### `ReviewState`<sup>Optional</sup> <a name="ReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews.property.reviewState"></a>

```csharp
public string ReviewState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#review_state DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#review_state}.

---

##### `ReviewSubReason`<sup>Optional</sup> <a name="ReviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews.property.reviewSubReason"></a>

```csharp
public string ReviewSubReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#review_sub_reason DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#review_sub_reason}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable {

};
```


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns {
    string Comment = null,
    DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask Mask = null,
    string Name = null,
    object Nullable = null,
    double PartitionIndex = null,
    double Position = null,
    string TypeIntervalType = null,
    string TypeJson = null,
    string TypeName = null,
    double TypePrecision = null,
    double TypeScale = null,
    string TypeText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.nullable">Nullable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typeJson">TypeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typeName">TypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typePrecision">TypePrecision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typeScale">TypeScale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typeText">TypeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask Mask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.nullable"></a>

```csharp
public object Nullable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typeJson"></a>

```csharp
public string TypeJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typePrecision"></a>

```csharp
public double TypePrecision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typeScale"></a>

```csharp
public double TypeScale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns.property.typeText"></a>

```csharp
public string TypeText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_text}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask {
    string FunctionName = null,
    string[] UsingColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#using_column_names}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails {
    string LocalName,
    object Partitions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails.property.partitions">Partitions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partitions DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partitions}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}.

---

##### `Partitions`<sup>Optional</sup> <a name="Partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails.property.partitions"></a>

```csharp
public object Partitions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partitions DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partitions}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions {
    object Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions.property.value">Value</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitions.property.value"></a>

```csharp
public object Value { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#value}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue {
    string Name = null,
    string Op = null,
    string RecipientPropertyKey = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue.property.op">Op</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#op DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#recipient_property_key DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}.

---

##### `Op`<sup>Optional</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue.property.op"></a>

```csharp
public string Op { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#op DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#op}.

---

##### `RecipientPropertyKey`<sup>Optional</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue.property.recipientPropertyKey"></a>

```csharp
public string RecipientPropertyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#recipient_property_key DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#recipient_property_key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#value}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView {

};
```


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns {
    string Comment = null,
    DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask Mask = null,
    string Name = null,
    object Nullable = null,
    double PartitionIndex = null,
    double Position = null,
    string TypeIntervalType = null,
    string TypeJson = null,
    string TypeName = null,
    double TypePrecision = null,
    double TypeScale = null,
    string TypeText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.nullable">Nullable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typeJson">TypeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typeName">TypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typePrecision">TypePrecision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typeScale">TypeScale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typeText">TypeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask Mask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.nullable"></a>

```csharp
public object Nullable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typeJson"></a>

```csharp
public string TypeJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typePrecision"></a>

```csharp
public double TypePrecision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typeScale"></a>

```csharp
public double TypeScale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns.property.typeText"></a>

```csharp
public string TypeText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#type_text}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask {
    string FunctionName = null,
    string[] UsingColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#using_column_names}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails {
    string LocalName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails {
    string LocalName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_asset_revisions_clean_room_assets#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAssets#local_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.resetFunctionName"></a>

```csharp
private void ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```csharp
private void ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```csharp
public string[] UsingColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.putMask"></a>

```csharp
private void PutMask(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetMask"></a>

```csharp
private void ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetPartitionIndex"></a>

```csharp
private void ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypeIntervalType"></a>

```csharp
private void ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypeJson"></a>

```csharp
private void ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypeName"></a>

```csharp
private void ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypePrecision"></a>

```csharp
private void ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypeScale"></a>

```csharp
private void ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.resetTypeText"></a>

```csharp
private void ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.nullable">Nullable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeText">TypeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference Mask { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.maskInput"></a>

```csharp
public object MaskInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.nullableInput"></a>

```csharp
public object NullableInput { get; }
```

- *Type:* object

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.partitionIndexInput"></a>

```csharp
public double PartitionIndexInput { get; }
```

- *Type:* double

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```csharp
public string TypeIntervalTypeInput { get; }
```

- *Type:* string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeJsonInput"></a>

```csharp
public string TypeJsonInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typePrecisionInput"></a>

```csharp
public double TypePrecisionInput { get; }
```

- *Type:* double

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeScaleInput"></a>

```csharp
public double TypeScaleInput { get; }
```

- *Type:* double

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeTextInput"></a>

```csharp
public string TypeTextInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.nullable"></a>

```csharp
public object Nullable { get; }
```

- *Type:* object

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; }
```

- *Type:* string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeJson"></a>

```csharp
public string TypeJson { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typePrecision"></a>

```csharp
public double TypePrecision { get; }
```

- *Type:* double

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeScale"></a>

```csharp
public double TypeScale { get; }
```

- *Type:* double

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.typeText"></a>

```csharp
public string TypeText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumns</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.property.columns"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.resetRunnerCollaboratorAliases">ResetRunnerCollaboratorAliases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRunnerCollaboratorAliases` <a name="ResetRunnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.resetRunnerCollaboratorAliases"></a>

```csharp
private void ResetRunnerCollaboratorAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.reviews">Reviews</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.reviewState">ReviewState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.notebookContentInput">NotebookContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.runnerCollaboratorAliasesInput">RunnerCollaboratorAliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.notebookContent">NotebookContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.runnerCollaboratorAliases">RunnerCollaboratorAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Reviews`<sup>Required</sup> <a name="Reviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.reviews"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList Reviews { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList</a>

---

##### `ReviewState`<sup>Required</sup> <a name="ReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.reviewState"></a>

```csharp
public string ReviewState { get; }
```

- *Type:* string

---

##### `NotebookContentInput`<sup>Optional</sup> <a name="NotebookContentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.notebookContentInput"></a>

```csharp
public string NotebookContentInput { get; }
```

- *Type:* string

---

##### `RunnerCollaboratorAliasesInput`<sup>Optional</sup> <a name="RunnerCollaboratorAliasesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.runnerCollaboratorAliasesInput"></a>

```csharp
public string[] RunnerCollaboratorAliasesInput { get; }
```

- *Type:* string[]

---

##### `NotebookContent`<sup>Required</sup> <a name="NotebookContent" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.notebookContent"></a>

```csharp
public string NotebookContent { get; }
```

- *Type:* string

---

##### `RunnerCollaboratorAliases`<sup>Required</sup> <a name="RunnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.runnerCollaboratorAliases"></a>

```csharp
public string[] RunnerCollaboratorAliases { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resetCreatedAtMillis">ResetCreatedAtMillis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resetReviewerCollaboratorAlias">ResetReviewerCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resetReviewState">ResetReviewState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resetReviewSubReason">ResetReviewSubReason</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCreatedAtMillis` <a name="ResetCreatedAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resetCreatedAtMillis"></a>

```csharp
private void ResetCreatedAtMillis()
```

##### `ResetReviewerCollaboratorAlias` <a name="ResetReviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resetReviewerCollaboratorAlias"></a>

```csharp
private void ResetReviewerCollaboratorAlias()
```

##### `ResetReviewState` <a name="ResetReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resetReviewState"></a>

```csharp
private void ResetReviewState()
```

##### `ResetReviewSubReason` <a name="ResetReviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.resetReviewSubReason"></a>

```csharp
private void ResetReviewSubReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.createdAtMillisInput">CreatedAtMillisInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput">ReviewerCollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewStateInput">ReviewStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewSubReasonInput">ReviewSubReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.createdAtMillis">CreatedAtMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewerCollaboratorAlias">ReviewerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewState">ReviewState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewSubReason">ReviewSubReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CreatedAtMillisInput`<sup>Optional</sup> <a name="CreatedAtMillisInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.createdAtMillisInput"></a>

```csharp
public double CreatedAtMillisInput { get; }
```

- *Type:* double

---

##### `ReviewerCollaboratorAliasInput`<sup>Optional</sup> <a name="ReviewerCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput"></a>

```csharp
public string ReviewerCollaboratorAliasInput { get; }
```

- *Type:* string

---

##### `ReviewStateInput`<sup>Optional</sup> <a name="ReviewStateInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewStateInput"></a>

```csharp
public string ReviewStateInput { get; }
```

- *Type:* string

---

##### `ReviewSubReasonInput`<sup>Optional</sup> <a name="ReviewSubReasonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewSubReasonInput"></a>

```csharp
public string ReviewSubReasonInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedAtMillis`<sup>Required</sup> <a name="CreatedAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.createdAtMillis"></a>

```csharp
public double CreatedAtMillis { get; }
```

- *Type:* double

---

##### `ReviewerCollaboratorAlias`<sup>Required</sup> <a name="ReviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewerCollaboratorAlias"></a>

```csharp
public string ReviewerCollaboratorAlias { get; }
```

- *Type:* string

---

##### `ReviewState`<sup>Required</sup> <a name="ReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewState"></a>

```csharp
public string ReviewState { get; }
```

- *Type:* string

---

##### `ReviewSubReason`<sup>Required</sup> <a name="ReviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.reviewSubReason"></a>

```csharp
public string ReviewSubReason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviewsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookReviews</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putForeignTable">PutForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putForeignTableLocalDetails">PutForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putNotebook">PutNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putTableLocalDetails">PutTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putView">PutView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putViewLocalDetails">PutViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putVolumeLocalDetails">PutVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetCleanRoomName">ResetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetForeignTable">ResetForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetForeignTableLocalDetails">ResetForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetNotebook">ResetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetTableLocalDetails">ResetTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetView">ResetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetViewLocalDetails">ResetViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetVolumeLocalDetails">ResetVolumeLocalDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForeignTable` <a name="PutForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putForeignTable"></a>

```csharp
private void PutForeignTable(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putForeignTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTable</a>

---

##### `PutForeignTableLocalDetails` <a name="PutForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putForeignTableLocalDetails"></a>

```csharp
private void PutForeignTableLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putForeignTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetails</a>

---

##### `PutNotebook` <a name="PutNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putNotebook"></a>

```csharp
private void PutNotebook(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebook</a>

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putTable"></a>

```csharp
private void PutTable(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTable</a>

---

##### `PutTableLocalDetails` <a name="PutTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putTableLocalDetails"></a>

```csharp
private void PutTableLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetails</a>

---

##### `PutView` <a name="PutView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putView"></a>

```csharp
private void PutView(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsView</a>

---

##### `PutViewLocalDetails` <a name="PutViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putViewLocalDetails"></a>

```csharp
private void PutViewLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putViewLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetails</a>

---

##### `PutVolumeLocalDetails` <a name="PutVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putVolumeLocalDetails"></a>

```csharp
private void PutVolumeLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.putVolumeLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetails</a>

---

##### `ResetCleanRoomName` <a name="ResetCleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetCleanRoomName"></a>

```csharp
private void ResetCleanRoomName()
```

##### `ResetForeignTable` <a name="ResetForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetForeignTable"></a>

```csharp
private void ResetForeignTable()
```

##### `ResetForeignTableLocalDetails` <a name="ResetForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetForeignTableLocalDetails"></a>

```csharp
private void ResetForeignTableLocalDetails()
```

##### `ResetNotebook` <a name="ResetNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetNotebook"></a>

```csharp
private void ResetNotebook()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetTableLocalDetails` <a name="ResetTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetTableLocalDetails"></a>

```csharp
private void ResetTableLocalDetails()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetView"></a>

```csharp
private void ResetView()
```

##### `ResetViewLocalDetails` <a name="ResetViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetViewLocalDetails"></a>

```csharp
private void ResetViewLocalDetails()
```

##### `ResetVolumeLocalDetails` <a name="ResetVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.resetVolumeLocalDetails"></a>

```csharp
private void ResetVolumeLocalDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.addedAt">AddedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.foreignTable">ForeignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.foreignTableLocalDetails">ForeignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.ownerCollaboratorAlias">OwnerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.tableLocalDetails">TableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.view">View</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.viewLocalDetails">ViewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.volumeLocalDetails">VolumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.assetTypeInput">AssetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.cleanRoomNameInput">CleanRoomNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.foreignTableInput">ForeignTableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.foreignTableLocalDetailsInput">ForeignTableLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.notebookInput">NotebookInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.tableInput">TableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.tableLocalDetailsInput">TableLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.viewInput">ViewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.viewLocalDetailsInput">ViewLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.volumeLocalDetailsInput">VolumeLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.assetType">AssetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.addedAt"></a>

```csharp
public double AddedAt { get; }
```

- *Type:* double

---

##### `ForeignTable`<sup>Required</sup> <a name="ForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.foreignTable"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference ForeignTable { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableOutputReference</a>

---

##### `ForeignTableLocalDetails`<sup>Required</sup> <a name="ForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.foreignTableLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference ForeignTableLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsForeignTableLocalDetailsOutputReference</a>

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.notebook"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference Notebook { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsNotebookOutputReference</a>

---

##### `OwnerCollaboratorAlias`<sup>Required</sup> <a name="OwnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.ownerCollaboratorAlias"></a>

```csharp
public string OwnerCollaboratorAlias { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.table"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference Table { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference</a>

---

##### `TableLocalDetails`<sup>Required</sup> <a name="TableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.tableLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference TableLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference</a>

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.view"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference View { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference</a>

---

##### `ViewLocalDetails`<sup>Required</sup> <a name="ViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.viewLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference ViewLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference</a>

---

##### `VolumeLocalDetails`<sup>Required</sup> <a name="VolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.volumeLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference VolumeLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference</a>

---

##### `AssetTypeInput`<sup>Optional</sup> <a name="AssetTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.assetTypeInput"></a>

```csharp
public string AssetTypeInput { get; }
```

- *Type:* string

---

##### `CleanRoomNameInput`<sup>Optional</sup> <a name="CleanRoomNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.cleanRoomNameInput"></a>

```csharp
public string CleanRoomNameInput { get; }
```

- *Type:* string

---

##### `ForeignTableInput`<sup>Optional</sup> <a name="ForeignTableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.foreignTableInput"></a>

```csharp
public object ForeignTableInput { get; }
```

- *Type:* object

---

##### `ForeignTableLocalDetailsInput`<sup>Optional</sup> <a name="ForeignTableLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.foreignTableLocalDetailsInput"></a>

```csharp
public object ForeignTableLocalDetailsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotebookInput`<sup>Optional</sup> <a name="NotebookInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.notebookInput"></a>

```csharp
public object NotebookInput { get; }
```

- *Type:* object

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.tableInput"></a>

```csharp
public object TableInput { get; }
```

- *Type:* object

---

##### `TableLocalDetailsInput`<sup>Optional</sup> <a name="TableLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.tableLocalDetailsInput"></a>

```csharp
public object TableLocalDetailsInput { get; }
```

- *Type:* object

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.viewInput"></a>

```csharp
public object ViewInput { get; }
```

- *Type:* object

---

##### `ViewLocalDetailsInput`<sup>Optional</sup> <a name="ViewLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.viewLocalDetailsInput"></a>

```csharp
public object ViewLocalDetailsInput { get; }
```

- *Type:* object

---

##### `VolumeLocalDetailsInput`<sup>Optional</sup> <a name="VolumeLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.volumeLocalDetailsInput"></a>

```csharp
public object VolumeLocalDetailsInput { get; }
```

- *Type:* object

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.assetType"></a>

```csharp
public string AssetType { get; }
```

- *Type:* string

---

##### `CleanRoomName`<sup>Required</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisions</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.resetFunctionName"></a>

```csharp
private void ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```csharp
private void ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```csharp
public string[] UsingColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.putMask"></a>

```csharp
private void PutMask(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetMask"></a>

```csharp
private void ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetPartitionIndex"></a>

```csharp
private void ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypeIntervalType"></a>

```csharp
private void ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypeJson"></a>

```csharp
private void ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypeName"></a>

```csharp
private void ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypePrecision"></a>

```csharp
private void ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypeScale"></a>

```csharp
private void ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.resetTypeText"></a>

```csharp
private void ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.nullable">Nullable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeText">TypeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference Mask { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.maskInput"></a>

```csharp
public object MaskInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.nullableInput"></a>

```csharp
public object NullableInput { get; }
```

- *Type:* object

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.partitionIndexInput"></a>

```csharp
public double PartitionIndexInput { get; }
```

- *Type:* double

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```csharp
public string TypeIntervalTypeInput { get; }
```

- *Type:* string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeJsonInput"></a>

```csharp
public string TypeJsonInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typePrecisionInput"></a>

```csharp
public double TypePrecisionInput { get; }
```

- *Type:* double

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeScaleInput"></a>

```csharp
public double TypeScaleInput { get; }
```

- *Type:* double

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeTextInput"></a>

```csharp
public string TypeTextInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.nullable"></a>

```csharp
public object Nullable { get; }
```

- *Type:* object

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; }
```

- *Type:* string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeJson"></a>

```csharp
public string TypeJson { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typePrecision"></a>

```csharp
public double TypePrecision { get; }
```

- *Type:* double

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeScale"></a>

```csharp
public double TypeScale { get; }
```

- *Type:* double

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.typeText"></a>

```csharp
public string TypeText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumns</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.putPartitions">PutPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.resetPartitions">ResetPartitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitions` <a name="PutPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.putPartitions"></a>

```csharp
private void PutPartitions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.putPartitions.parameter.value"></a>

- *Type:* object

---

##### `ResetPartitions` <a name="ResetPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.resetPartitions"></a>

```csharp
private void ResetPartitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.partitions">Partitions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.partitionsInput">PartitionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.partitions"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList Partitions { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList</a>

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `PartitionsInput`<sup>Optional</sup> <a name="PartitionsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.partitionsInput"></a>

```csharp
public object PartitionsInput { get; }
```

- *Type:* object

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.putValue"></a>

```csharp
private void PutValue(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.putValue.parameter.value"></a>

- *Type:* object

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.property.value"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList Value { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.resetOp">ResetOp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey">ResetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOp` <a name="ResetOp" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.resetOp"></a>

```csharp
private void ResetOp()
```

##### `ResetRecipientPropertyKey` <a name="ResetRecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey"></a>

```csharp
private void ResetRecipientPropertyKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.opInput">OpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput">RecipientPropertyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.op">Op</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.opInput"></a>

```csharp
public string OpInput { get; }
```

- *Type:* string

---

##### `RecipientPropertyKeyInput`<sup>Optional</sup> <a name="RecipientPropertyKeyInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput"></a>

```csharp
public string RecipientPropertyKeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.op"></a>

```csharp
public string Op { get; }
```

- *Type:* string

---

##### `RecipientPropertyKey`<sup>Required</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey"></a>

```csharp
public string RecipientPropertyKey { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableLocalDetailsPartitionsValueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.property.columns"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsTableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.resetFunctionName"></a>

```csharp
private void ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.resetUsingColumnNames"></a>

```csharp
private void ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```csharp
public string[] UsingColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.putMask"></a>

```csharp
private void PutMask(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetMask"></a>

```csharp
private void ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetPartitionIndex"></a>

```csharp
private void ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypeIntervalType"></a>

```csharp
private void ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypeJson"></a>

```csharp
private void ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypeName"></a>

```csharp
private void ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypePrecision"></a>

```csharp
private void ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypeScale"></a>

```csharp
private void ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.resetTypeText"></a>

```csharp
private void ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.nullable">Nullable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeText">TypeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference Mask { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.maskInput"></a>

```csharp
public object MaskInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.nullableInput"></a>

```csharp
public object NullableInput { get; }
```

- *Type:* object

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.partitionIndexInput"></a>

```csharp
public double PartitionIndexInput { get; }
```

- *Type:* double

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeIntervalTypeInput"></a>

```csharp
public string TypeIntervalTypeInput { get; }
```

- *Type:* string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeJsonInput"></a>

```csharp
public string TypeJsonInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typePrecisionInput"></a>

```csharp
public double TypePrecisionInput { get; }
```

- *Type:* double

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeScaleInput"></a>

```csharp
public double TypeScaleInput { get; }
```

- *Type:* double

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeTextInput"></a>

```csharp
public string TypeTextInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.nullable"></a>

```csharp
public object Nullable { get; }
```

- *Type:* object

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; }
```

- *Type:* string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeJson"></a>

```csharp
public string TypeJson { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typePrecision"></a>

```csharp
public double TypePrecision { get; }
```

- *Type:* double

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeScale"></a>

```csharp
public double TypeScale { get; }
```

- *Type:* double

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.typeText"></a>

```csharp
public string TypeText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumns</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.property.columns"></a>

```csharp
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsViewOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAssets.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetsRevisionsVolumeLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



