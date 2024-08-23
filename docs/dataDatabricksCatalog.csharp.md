# `dataDatabricksCatalog` Submodule <a name="`dataDatabricksCatalog` Submodule" id="@cdktf/provider-databricks.dataDatabricksCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCatalog <a name="DataDatabricksCatalog" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog databricks_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCatalog(Construct Scope, string Id, DataDatabricksCatalogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig">DataDatabricksCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig">DataDatabricksCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo">PutCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetCatalogInfo">ResetCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCatalogInfo` <a name="PutCatalogInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo"></a>

```csharp
private void PutCatalogInfo(DataDatabricksCatalogCatalogInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

---

##### `ResetCatalogInfo` <a name="ResetCatalogInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetCatalogInfo"></a>

```csharp
private void ResetCatalogInfo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCatalog.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksCatalog resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfo">CatalogInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference">DataDatabricksCatalogCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfoInput">CatalogInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CatalogInfo`<sup>Required</sup> <a name="CatalogInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfo"></a>

```csharp
public DataDatabricksCatalogCatalogInfoOutputReference CatalogInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference">DataDatabricksCatalogCatalogInfoOutputReference</a>

---

##### `CatalogInfoInput`<sup>Optional</sup> <a name="CatalogInfoInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfoInput"></a>

```csharp
public DataDatabricksCatalogCatalogInfo CatalogInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCatalogCatalogInfo <a name="DataDatabricksCatalogCatalogInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCatalogCatalogInfo {
    object BrowseOnly = null,
    string CatalogType = null,
    string Comment = null,
    string ConnectionName = null,
    double CreatedAt = null,
    string CreatedBy = null,
    DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag EffectivePredictiveOptimizationFlag = null,
    string EnablePredictiveOptimization = null,
    string FullName = null,
    string IsolationMode = null,
    string MetastoreId = null,
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    string Owner = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string ProviderName = null,
    DataDatabricksCatalogCatalogInfoProvisioningInfo ProvisioningInfo = null,
    string SecurableKind = null,
    string SecurableType = null,
    string ShareName = null,
    string StorageLocation = null,
    string StorageRoot = null,
    double UpdatedAt = null,
    string UpdatedBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.browseOnly">BrowseOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#browse_only DataDatabricksCatalog#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.catalogType">CatalogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#catalog_type DataDatabricksCatalog#catalog_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#comment DataDatabricksCatalog#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.connectionName">ConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#connection_name DataDatabricksCatalog#connection_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#created_at DataDatabricksCatalog#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#created_by DataDatabricksCatalog#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#enable_predictive_optimization DataDatabricksCatalog#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#full_name DataDatabricksCatalog#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.isolationMode">IsolationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#isolation_mode DataDatabricksCatalog#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#metastore_id DataDatabricksCatalog#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#options DataDatabricksCatalog#options}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#owner DataDatabricksCatalog#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#properties DataDatabricksCatalog#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.providerName">ProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#provider_name DataDatabricksCatalog#provider_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.provisioningInfo">ProvisioningInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | provisioning_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableKind">SecurableKind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#securable_kind DataDatabricksCatalog#securable_kind}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableType">SecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#securable_type DataDatabricksCatalog#securable_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.shareName">ShareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#share_name DataDatabricksCatalog#share_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageLocation">StorageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#storage_location DataDatabricksCatalog#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageRoot">StorageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#storage_root DataDatabricksCatalog#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#updated_at DataDatabricksCatalog#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#updated_by DataDatabricksCatalog#updated_by}. |

---

##### `BrowseOnly`<sup>Optional</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.browseOnly"></a>

```csharp
public object BrowseOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#browse_only DataDatabricksCatalog#browse_only}.

---

##### `CatalogType`<sup>Optional</sup> <a name="CatalogType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.catalogType"></a>

```csharp
public string CatalogType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#catalog_type DataDatabricksCatalog#catalog_type}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#comment DataDatabricksCatalog#comment}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#connection_name DataDatabricksCatalog#connection_name}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#created_at DataDatabricksCatalog#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#created_by DataDatabricksCatalog#created_by}.

---

##### `EffectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.effectivePredictiveOptimizationFlag"></a>

```csharp
public DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag EffectivePredictiveOptimizationFlag { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#effective_predictive_optimization_flag DataDatabricksCatalog#effective_predictive_optimization_flag}

---

##### `EnablePredictiveOptimization`<sup>Optional</sup> <a name="EnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.enablePredictiveOptimization"></a>

```csharp
public string EnablePredictiveOptimization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#enable_predictive_optimization DataDatabricksCatalog#enable_predictive_optimization}.

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#full_name DataDatabricksCatalog#full_name}.

---

##### `IsolationMode`<sup>Optional</sup> <a name="IsolationMode" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.isolationMode"></a>

```csharp
public string IsolationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#isolation_mode DataDatabricksCatalog#isolation_mode}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#metastore_id DataDatabricksCatalog#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#options DataDatabricksCatalog#options}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#owner DataDatabricksCatalog#owner}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#properties DataDatabricksCatalog#properties}.

---

##### `ProviderName`<sup>Optional</sup> <a name="ProviderName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.providerName"></a>

```csharp
public string ProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#provider_name DataDatabricksCatalog#provider_name}.

---

##### `ProvisioningInfo`<sup>Optional</sup> <a name="ProvisioningInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.provisioningInfo"></a>

```csharp
public DataDatabricksCatalogCatalogInfoProvisioningInfo ProvisioningInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

provisioning_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#provisioning_info DataDatabricksCatalog#provisioning_info}

---

##### `SecurableKind`<sup>Optional</sup> <a name="SecurableKind" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableKind"></a>

```csharp
public string SecurableKind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#securable_kind DataDatabricksCatalog#securable_kind}.

---

##### `SecurableType`<sup>Optional</sup> <a name="SecurableType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableType"></a>

```csharp
public string SecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#securable_type DataDatabricksCatalog#securable_type}.

---

##### `ShareName`<sup>Optional</sup> <a name="ShareName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.shareName"></a>

```csharp
public string ShareName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#share_name DataDatabricksCatalog#share_name}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageLocation"></a>

```csharp
public string StorageLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#storage_location DataDatabricksCatalog#storage_location}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageRoot"></a>

```csharp
public string StorageRoot { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#storage_root DataDatabricksCatalog#storage_root}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#updated_at DataDatabricksCatalog#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#updated_by DataDatabricksCatalog#updated_by}.

---

### DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag <a name="DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag {
    string Value,
    string InheritedFromName = null,
    string InheritedFromType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#value DataDatabricksCatalog#value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName">InheritedFromName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#inherited_from_name DataDatabricksCatalog#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType">InheritedFromType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#inherited_from_type DataDatabricksCatalog#inherited_from_type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#value DataDatabricksCatalog#value}.

---

##### `InheritedFromName`<sup>Optional</sup> <a name="InheritedFromName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```csharp
public string InheritedFromName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#inherited_from_name DataDatabricksCatalog#inherited_from_name}.

---

##### `InheritedFromType`<sup>Optional</sup> <a name="InheritedFromType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```csharp
public string InheritedFromType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#inherited_from_type DataDatabricksCatalog#inherited_from_type}.

---

### DataDatabricksCatalogCatalogInfoProvisioningInfo <a name="DataDatabricksCatalogCatalogInfoProvisioningInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCatalogCatalogInfoProvisioningInfo {
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#state DataDatabricksCatalog#state}. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#state DataDatabricksCatalog#state}.

---

### DataDatabricksCatalogConfig <a name="DataDatabricksCatalogConfig" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCatalogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    DataDatabricksCatalogCatalogInfo CatalogInfo = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.catalogInfo">CatalogInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | catalog_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#id DataDatabricksCatalog#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}.

---

##### `CatalogInfo`<sup>Optional</sup> <a name="CatalogInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.catalogInfo"></a>

```csharp
public DataDatabricksCatalogCatalogInfo CatalogInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#catalog_info DataDatabricksCatalog#catalog_info}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/catalog#id DataDatabricksCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference <a name="DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">ResetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">ResetInheritedFromType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInheritedFromName` <a name="ResetInheritedFromName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```csharp
private void ResetInheritedFromName()
```

##### `ResetInheritedFromType` <a name="ResetInheritedFromType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```csharp
private void ResetInheritedFromType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">InheritedFromNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">InheritedFromTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">InheritedFromName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">InheritedFromType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InheritedFromNameInput`<sup>Optional</sup> <a name="InheritedFromNameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```csharp
public string InheritedFromNameInput { get; }
```

- *Type:* string

---

##### `InheritedFromTypeInput`<sup>Optional</sup> <a name="InheritedFromTypeInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```csharp
public string InheritedFromTypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `InheritedFromName`<sup>Required</sup> <a name="InheritedFromName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```csharp
public string InheritedFromName { get; }
```

- *Type:* string

---

##### `InheritedFromType`<sup>Required</sup> <a name="InheritedFromType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```csharp
public string InheritedFromType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

---


### DataDatabricksCatalogCatalogInfoOutputReference <a name="DataDatabricksCatalogCatalogInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCatalogCatalogInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag">PutEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo">PutProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetBrowseOnly">ResetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCatalogType">ResetCatalogType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEffectivePredictiveOptimizationFlag">ResetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEnablePredictiveOptimization">ResetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetIsolationMode">ResetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProviderName">ResetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProvisioningInfo">ResetProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableKind">ResetSecurableKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableType">ResetSecurableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetShareName">ResetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEffectivePredictiveOptimizationFlag` <a name="PutEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag"></a>

```csharp
private void PutEffectivePredictiveOptimizationFlag(DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

---

##### `PutProvisioningInfo` <a name="PutProvisioningInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo"></a>

```csharp
private void PutProvisioningInfo(DataDatabricksCatalogCatalogInfoProvisioningInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

---

##### `ResetBrowseOnly` <a name="ResetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetBrowseOnly"></a>

```csharp
private void ResetBrowseOnly()
```

##### `ResetCatalogType` <a name="ResetCatalogType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCatalogType"></a>

```csharp
private void ResetCatalogType()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetEffectivePredictiveOptimizationFlag` <a name="ResetEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEffectivePredictiveOptimizationFlag"></a>

```csharp
private void ResetEffectivePredictiveOptimizationFlag()
```

##### `ResetEnablePredictiveOptimization` <a name="ResetEnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEnablePredictiveOptimization"></a>

```csharp
private void ResetEnablePredictiveOptimization()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetFullName"></a>

```csharp
private void ResetFullName()
```

##### `ResetIsolationMode` <a name="ResetIsolationMode" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetIsolationMode"></a>

```csharp
private void ResetIsolationMode()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetProviderName` <a name="ResetProviderName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProviderName"></a>

```csharp
private void ResetProviderName()
```

##### `ResetProvisioningInfo` <a name="ResetProvisioningInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProvisioningInfo"></a>

```csharp
private void ResetProvisioningInfo()
```

##### `ResetSecurableKind` <a name="ResetSecurableKind" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableKind"></a>

```csharp
private void ResetSecurableKind()
```

##### `ResetSecurableType` <a name="ResetSecurableType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableType"></a>

```csharp
private void ResetSecurableType()
```

##### `ResetShareName` <a name="ResetShareName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetShareName"></a>

```csharp
private void ResetShareName()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageLocation"></a>

```csharp
private void ResetStorageLocation()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageRoot"></a>

```csharp
private void ResetStorageRoot()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedBy"></a>

```csharp
private void ResetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfo">ProvisioningInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference">DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnlyInput">BrowseOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogTypeInput">CatalogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlagInput">EffectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimizationInput">EnablePredictiveOptimizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationModeInput">IsolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerNameInput">ProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfoInput">ProvisioningInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableKindInput">SecurableKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocationInput">StorageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRootInput">StorageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnly">BrowseOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogType">CatalogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationMode">IsolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableKind">SecurableKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableType">SecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareName">ShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocation">StorageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRoot">StorageRoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlag"></a>

```csharp
public DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference EffectivePredictiveOptimizationFlag { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `ProvisioningInfo`<sup>Required</sup> <a name="ProvisioningInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfo"></a>

```csharp
public DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference ProvisioningInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference">DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference</a>

---

##### `BrowseOnlyInput`<sup>Optional</sup> <a name="BrowseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnlyInput"></a>

```csharp
public object BrowseOnlyInput { get; }
```

- *Type:* object

---

##### `CatalogTypeInput`<sup>Optional</sup> <a name="CatalogTypeInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogTypeInput"></a>

```csharp
public string CatalogTypeInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `EffectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlagInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlagInput"></a>

```csharp
public DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag EffectivePredictiveOptimizationFlagInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

---

##### `EnablePredictiveOptimizationInput`<sup>Optional</sup> <a name="EnablePredictiveOptimizationInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimizationInput"></a>

```csharp
public string EnablePredictiveOptimizationInput { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `IsolationModeInput`<sup>Optional</sup> <a name="IsolationModeInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationModeInput"></a>

```csharp
public string IsolationModeInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerNameInput"></a>

```csharp
public string ProviderNameInput { get; }
```

- *Type:* string

---

##### `ProvisioningInfoInput`<sup>Optional</sup> <a name="ProvisioningInfoInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfoInput"></a>

```csharp
public DataDatabricksCatalogCatalogInfoProvisioningInfo ProvisioningInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

---

##### `SecurableKindInput`<sup>Optional</sup> <a name="SecurableKindInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableKindInput"></a>

```csharp
public string SecurableKindInput { get; }
```

- *Type:* string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableTypeInput"></a>

```csharp
public string SecurableTypeInput { get; }
```

- *Type:* string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareNameInput"></a>

```csharp
public string ShareNameInput { get; }
```

- *Type:* string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocationInput"></a>

```csharp
public string StorageLocationInput { get; }
```

- *Type:* string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRootInput"></a>

```csharp
public string StorageRootInput { get; }
```

- *Type:* string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAtInput"></a>

```csharp
public double UpdatedAtInput { get; }
```

- *Type:* double

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedByInput"></a>

```csharp
public string UpdatedByInput { get; }
```

- *Type:* string

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnly"></a>

```csharp
public object BrowseOnly { get; }
```

- *Type:* object

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogType"></a>

```csharp
public string CatalogType { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `EnablePredictiveOptimization`<sup>Required</sup> <a name="EnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimization"></a>

```csharp
public string EnablePredictiveOptimization { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `IsolationMode`<sup>Required</sup> <a name="IsolationMode" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationMode"></a>

```csharp
public string IsolationMode { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `SecurableKind`<sup>Required</sup> <a name="SecurableKind" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableKind"></a>

```csharp
public string SecurableKind { get; }
```

- *Type:* string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableType"></a>

```csharp
public string SecurableType { get; }
```

- *Type:* string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareName"></a>

```csharp
public string ShareName { get; }
```

- *Type:* string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocation"></a>

```csharp
public string StorageLocation { get; }
```

- *Type:* string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRoot"></a>

```csharp
public string StorageRoot { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCatalogCatalogInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

---


### DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference <a name="DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCatalogCatalogInfoProvisioningInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

---



