# `dataDatabricksStorageCredential` Submodule <a name="`dataDatabricksStorageCredential` Submodule" id="@cdktf/provider-databricks.dataDatabricksStorageCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksStorageCredential <a name="DataDatabricksStorageCredential" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential databricks_storage_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredential(Construct Scope, string Id, DataDatabricksStorageCredentialConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig">DataDatabricksStorageCredentialConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig">DataDatabricksStorageCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo">PutStorageCredentialInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetStorageCredentialInfo">ResetStorageCredentialInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutStorageCredentialInfo` <a name="PutStorageCredentialInfo" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo"></a>

```csharp
private void PutStorageCredentialInfo(DataDatabricksStorageCredentialStorageCredentialInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStorageCredentialInfo` <a name="ResetStorageCredentialInfo" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetStorageCredentialInfo"></a>

```csharp
private void ResetStorageCredentialInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksStorageCredential resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksStorageCredential.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksStorageCredential.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksStorageCredential.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksStorageCredential.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksStorageCredential resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksStorageCredential to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksStorageCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksStorageCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.storageCredentialInfo">StorageCredentialInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.storageCredentialInfoInput">StorageCredentialInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `StorageCredentialInfo`<sup>Required</sup> <a name="StorageCredentialInfo" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.storageCredentialInfo"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoOutputReference StorageCredentialInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StorageCredentialInfoInput`<sup>Optional</sup> <a name="StorageCredentialInfoInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.storageCredentialInfoInput"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfo StorageCredentialInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksStorageCredentialConfig <a name="DataDatabricksStorageCredentialConfig" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    DataDatabricksStorageCredentialStorageCredentialInfo StorageCredentialInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.storageCredentialInfo">StorageCredentialInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a></code> | storage_credential_info block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageCredentialInfo`<sup>Optional</sup> <a name="StorageCredentialInfo" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.storageCredentialInfo"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfo StorageCredentialInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a>

storage_credential_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#storage_credential_info DataDatabricksStorageCredential#storage_credential_info}

---

### DataDatabricksStorageCredentialStorageCredentialInfo <a name="DataDatabricksStorageCredentialStorageCredentialInfo" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfo {
    DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole AwsIamRole = null,
    DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity AzureManagedIdentity = null,
    DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal AzureServicePrincipal = null,
    DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken CloudflareApiToken = null,
    string Comment = null,
    double CreatedAt = null,
    string CreatedBy = null,
    DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount DatabricksGcpServiceAccount = null,
    string Id = null,
    string MetastoreId = null,
    string Name = null,
    string Owner = null,
    object ReadOnly = null,
    double UpdatedAt = null,
    string UpdatedBy = null,
    object UsedForManagedStorage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.awsIamRole">AwsIamRole</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.azureManagedIdentity">AzureManagedIdentity</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.azureServicePrincipal">AzureServicePrincipal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.cloudflareApiToken">CloudflareApiToken</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a></code> | cloudflare_api_token block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#comment DataDatabricksStorageCredential#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#created_at DataDatabricksStorageCredential#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#created_by DataDatabricksStorageCredential#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.databricksGcpServiceAccount">DatabricksGcpServiceAccount</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a></code> | databricks_gcp_service_account block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#metastore_id DataDatabricksStorageCredential#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#owner DataDatabricksStorageCredential#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.readOnly">ReadOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#read_only DataDatabricksStorageCredential#read_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#updated_at DataDatabricksStorageCredential#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#updated_by DataDatabricksStorageCredential#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.usedForManagedStorage">UsedForManagedStorage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#used_for_managed_storage DataDatabricksStorageCredential#used_for_managed_storage}. |

---

##### `AwsIamRole`<sup>Optional</sup> <a name="AwsIamRole" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.awsIamRole"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole AwsIamRole { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#aws_iam_role DataDatabricksStorageCredential#aws_iam_role}

---

##### `AzureManagedIdentity`<sup>Optional</sup> <a name="AzureManagedIdentity" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.azureManagedIdentity"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity AzureManagedIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#azure_managed_identity DataDatabricksStorageCredential#azure_managed_identity}

---

##### `AzureServicePrincipal`<sup>Optional</sup> <a name="AzureServicePrincipal" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.azureServicePrincipal"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal AzureServicePrincipal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#azure_service_principal DataDatabricksStorageCredential#azure_service_principal}

---

##### `CloudflareApiToken`<sup>Optional</sup> <a name="CloudflareApiToken" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.cloudflareApiToken"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken CloudflareApiToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a>

cloudflare_api_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#cloudflare_api_token DataDatabricksStorageCredential#cloudflare_api_token}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#comment DataDatabricksStorageCredential#comment}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#created_at DataDatabricksStorageCredential#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#created_by DataDatabricksStorageCredential#created_by}.

---

##### `DatabricksGcpServiceAccount`<sup>Optional</sup> <a name="DatabricksGcpServiceAccount" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.databricksGcpServiceAccount"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount DatabricksGcpServiceAccount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a>

databricks_gcp_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#databricks_gcp_service_account DataDatabricksStorageCredential#databricks_gcp_service_account}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#metastore_id DataDatabricksStorageCredential#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#owner DataDatabricksStorageCredential#owner}.

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#read_only DataDatabricksStorageCredential#read_only}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#updated_at DataDatabricksStorageCredential#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#updated_by DataDatabricksStorageCredential#updated_by}.

---

##### `UsedForManagedStorage`<sup>Optional</sup> <a name="UsedForManagedStorage" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.usedForManagedStorage"></a>

```csharp
public object UsedForManagedStorage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#used_for_managed_storage DataDatabricksStorageCredential#used_for_managed_storage}.

---

### DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole <a name="DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole {
    string RoleArn,
    string ExternalId = null,
    string UnityCatalogIamArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#role_arn DataDatabricksStorageCredential#role_arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#external_id DataDatabricksStorageCredential#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.unityCatalogIamArn">UnityCatalogIamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#unity_catalog_iam_arn DataDatabricksStorageCredential#unity_catalog_iam_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#role_arn DataDatabricksStorageCredential#role_arn}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#external_id DataDatabricksStorageCredential#external_id}.

---

##### `UnityCatalogIamArn`<sup>Optional</sup> <a name="UnityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.unityCatalogIamArn"></a>

```csharp
public string UnityCatalogIamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#unity_catalog_iam_arn DataDatabricksStorageCredential#unity_catalog_iam_arn}.

---

### DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity <a name="DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity {
    string AccessConnectorId,
    string CredentialId = null,
    string ManagedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.accessConnectorId">AccessConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#access_connector_id DataDatabricksStorageCredential#access_connector_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.credentialId">CredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.managedIdentityId">ManagedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#managed_identity_id DataDatabricksStorageCredential#managed_identity_id}. |

---

##### `AccessConnectorId`<sup>Required</sup> <a name="AccessConnectorId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.accessConnectorId"></a>

```csharp
public string AccessConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#access_connector_id DataDatabricksStorageCredential#access_connector_id}.

---

##### `CredentialId`<sup>Optional</sup> <a name="CredentialId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.credentialId"></a>

```csharp
public string CredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}.

---

##### `ManagedIdentityId`<sup>Optional</sup> <a name="ManagedIdentityId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.managedIdentityId"></a>

```csharp
public string ManagedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#managed_identity_id DataDatabricksStorageCredential#managed_identity_id}.

---

### DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal <a name="DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal {
    string ApplicationId,
    string ClientSecret,
    string DirectoryId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#application_id DataDatabricksStorageCredential#application_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#client_secret DataDatabricksStorageCredential#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#directory_id DataDatabricksStorageCredential#directory_id}. |

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#application_id DataDatabricksStorageCredential#application_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#client_secret DataDatabricksStorageCredential#client_secret}.

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#directory_id DataDatabricksStorageCredential#directory_id}.

---

### DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken <a name="DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken {
    string AccessKeyId,
    string AccountId,
    string SecretAccessKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#access_key_id DataDatabricksStorageCredential#access_key_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#account_id DataDatabricksStorageCredential#account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#secret_access_key DataDatabricksStorageCredential#secret_access_key}. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#access_key_id DataDatabricksStorageCredential#access_key_id}.

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#account_id DataDatabricksStorageCredential#account_id}.

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#secret_access_key DataDatabricksStorageCredential#secret_access_key}.

---

### DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount <a name="DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount {
    string CredentialId = null,
    string Email = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount.property.credentialId">CredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#email DataDatabricksStorageCredential#email}. |

---

##### `CredentialId`<sup>Optional</sup> <a name="CredentialId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount.property.credentialId"></a>

```csharp
public string CredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.47.0/docs/data-sources/storage_credential#email DataDatabricksStorageCredential#email}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resetUnityCatalogIamArn">ResetUnityCatalogIamArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetUnityCatalogIamArn` <a name="ResetUnityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resetUnityCatalogIamArn"></a>

```csharp
private void ResetUnityCatalogIamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.unityCatalogIamArnInput">UnityCatalogIamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.unityCatalogIamArn">UnityCatalogIamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `UnityCatalogIamArnInput`<sup>Optional</sup> <a name="UnityCatalogIamArnInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.unityCatalogIamArnInput"></a>

```csharp
public string UnityCatalogIamArnInput { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `UnityCatalogIamArn`<sup>Required</sup> <a name="UnityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.unityCatalogIamArn"></a>

```csharp
public string UnityCatalogIamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a>

---


### DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resetCredentialId">ResetCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resetManagedIdentityId">ResetManagedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialId` <a name="ResetCredentialId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resetCredentialId"></a>

```csharp
private void ResetCredentialId()
```

##### `ResetManagedIdentityId` <a name="ResetManagedIdentityId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resetManagedIdentityId"></a>

```csharp
private void ResetManagedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.accessConnectorIdInput">AccessConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.credentialIdInput">CredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.managedIdentityIdInput">ManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.accessConnectorId">AccessConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.credentialId">CredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.managedIdentityId">ManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessConnectorIdInput`<sup>Optional</sup> <a name="AccessConnectorIdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.accessConnectorIdInput"></a>

```csharp
public string AccessConnectorIdInput { get; }
```

- *Type:* string

---

##### `CredentialIdInput`<sup>Optional</sup> <a name="CredentialIdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.credentialIdInput"></a>

```csharp
public string CredentialIdInput { get; }
```

- *Type:* string

---

##### `ManagedIdentityIdInput`<sup>Optional</sup> <a name="ManagedIdentityIdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.managedIdentityIdInput"></a>

```csharp
public string ManagedIdentityIdInput { get; }
```

- *Type:* string

---

##### `AccessConnectorId`<sup>Required</sup> <a name="AccessConnectorId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.accessConnectorId"></a>

```csharp
public string AccessConnectorId { get; }
```

- *Type:* string

---

##### `CredentialId`<sup>Required</sup> <a name="CredentialId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.credentialId"></a>

```csharp
public string CredentialId { get; }
```

- *Type:* string

---

##### `ManagedIdentityId`<sup>Required</sup> <a name="ManagedIdentityId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.managedIdentityId"></a>

```csharp
public string ManagedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a>

---


### DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a>

---


### DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a>

---


### DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resetCredentialId">ResetCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialId` <a name="ResetCredentialId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resetCredentialId"></a>

```csharp
private void ResetCredentialId()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.credentialIdInput">CredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.credentialId">CredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialIdInput`<sup>Optional</sup> <a name="CredentialIdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.credentialIdInput"></a>

```csharp
public string CredentialIdInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `CredentialId`<sup>Required</sup> <a name="CredentialId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.credentialId"></a>

```csharp
public string CredentialId { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a>

---


### DataDatabricksStorageCredentialStorageCredentialInfoOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksStorageCredentialStorageCredentialInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAwsIamRole">PutAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureManagedIdentity">PutAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureServicePrincipal">PutAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putCloudflareApiToken">PutCloudflareApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putDatabricksGcpServiceAccount">PutDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAwsIamRole">ResetAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAzureManagedIdentity">ResetAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAzureServicePrincipal">ResetAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCloudflareApiToken">ResetCloudflareApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetDatabricksGcpServiceAccount">ResetDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUsedForManagedStorage">ResetUsedForManagedStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsIamRole` <a name="PutAwsIamRole" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAwsIamRole"></a>

```csharp
private void PutAwsIamRole(DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAwsIamRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a>

---

##### `PutAzureManagedIdentity` <a name="PutAzureManagedIdentity" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureManagedIdentity"></a>

```csharp
private void PutAzureManagedIdentity(DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a>

---

##### `PutAzureServicePrincipal` <a name="PutAzureServicePrincipal" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureServicePrincipal"></a>

```csharp
private void PutAzureServicePrincipal(DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a>

---

##### `PutCloudflareApiToken` <a name="PutCloudflareApiToken" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putCloudflareApiToken"></a>

```csharp
private void PutCloudflareApiToken(DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putCloudflareApiToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a>

---

##### `PutDatabricksGcpServiceAccount` <a name="PutDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putDatabricksGcpServiceAccount"></a>

```csharp
private void PutDatabricksGcpServiceAccount(DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putDatabricksGcpServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a>

---

##### `ResetAwsIamRole` <a name="ResetAwsIamRole" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAwsIamRole"></a>

```csharp
private void ResetAwsIamRole()
```

##### `ResetAzureManagedIdentity` <a name="ResetAzureManagedIdentity" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAzureManagedIdentity"></a>

```csharp
private void ResetAzureManagedIdentity()
```

##### `ResetAzureServicePrincipal` <a name="ResetAzureServicePrincipal" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAzureServicePrincipal"></a>

```csharp
private void ResetAzureServicePrincipal()
```

##### `ResetCloudflareApiToken` <a name="ResetCloudflareApiToken" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCloudflareApiToken"></a>

```csharp
private void ResetCloudflareApiToken()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetDatabricksGcpServiceAccount` <a name="ResetDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetDatabricksGcpServiceAccount"></a>

```csharp
private void ResetDatabricksGcpServiceAccount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUpdatedBy"></a>

```csharp
private void ResetUpdatedBy()
```

##### `ResetUsedForManagedStorage` <a name="ResetUsedForManagedStorage" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUsedForManagedStorage"></a>

```csharp
private void ResetUsedForManagedStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.awsIamRole">AwsIamRole</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureManagedIdentity">AzureManagedIdentity</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureServicePrincipal">AzureServicePrincipal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.cloudflareApiToken">CloudflareApiToken</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.databricksGcpServiceAccount">DatabricksGcpServiceAccount</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.awsIamRoleInput">AwsIamRoleInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureManagedIdentityInput">AzureManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureServicePrincipalInput">AzureServicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.cloudflareApiTokenInput">CloudflareApiTokenInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.databricksGcpServiceAccountInput">DatabricksGcpServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.usedForManagedStorageInput">UsedForManagedStorageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.usedForManagedStorage">UsedForManagedStorage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsIamRole`<sup>Required</sup> <a name="AwsIamRole" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.awsIamRole"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference AwsIamRole { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference</a>

---

##### `AzureManagedIdentity`<sup>Required</sup> <a name="AzureManagedIdentity" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureManagedIdentity"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference AzureManagedIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference</a>

---

##### `AzureServicePrincipal`<sup>Required</sup> <a name="AzureServicePrincipal" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureServicePrincipal"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference AzureServicePrincipal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference</a>

---

##### `CloudflareApiToken`<sup>Required</sup> <a name="CloudflareApiToken" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.cloudflareApiToken"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference CloudflareApiToken { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference</a>

---

##### `DatabricksGcpServiceAccount`<sup>Required</sup> <a name="DatabricksGcpServiceAccount" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.databricksGcpServiceAccount"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference DatabricksGcpServiceAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference</a>

---

##### `AwsIamRoleInput`<sup>Optional</sup> <a name="AwsIamRoleInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.awsIamRoleInput"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole AwsIamRoleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a>

---

##### `AzureManagedIdentityInput`<sup>Optional</sup> <a name="AzureManagedIdentityInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureManagedIdentityInput"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity AzureManagedIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a>

---

##### `AzureServicePrincipalInput`<sup>Optional</sup> <a name="AzureServicePrincipalInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureServicePrincipalInput"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal AzureServicePrincipalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a>

---

##### `CloudflareApiTokenInput`<sup>Optional</sup> <a name="CloudflareApiTokenInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.cloudflareApiTokenInput"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken CloudflareApiTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `DatabricksGcpServiceAccountInput`<sup>Optional</sup> <a name="DatabricksGcpServiceAccountInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.databricksGcpServiceAccountInput"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount DatabricksGcpServiceAccountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedAtInput"></a>

```csharp
public double UpdatedAtInput { get; }
```

- *Type:* double

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedByInput"></a>

```csharp
public string UpdatedByInput { get; }
```

- *Type:* string

---

##### `UsedForManagedStorageInput`<sup>Optional</sup> <a name="UsedForManagedStorageInput" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.usedForManagedStorageInput"></a>

```csharp
public object UsedForManagedStorageInput { get; }
```

- *Type:* object

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `UsedForManagedStorage`<sup>Required</sup> <a name="UsedForManagedStorage" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.usedForManagedStorage"></a>

```csharp
public object UsedForManagedStorage { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksStorageCredentialStorageCredentialInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a>

---



