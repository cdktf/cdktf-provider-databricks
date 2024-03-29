# `dataDatabricksClusterPolicy` Submodule <a name="`dataDatabricksClusterPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksClusterPolicy <a name="DataDatabricksClusterPolicy" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy databricks_cluster_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksClusterPolicy(Construct Scope, string Id, DataDatabricksClusterPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig">DataDatabricksClusterPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig">DataDatabricksClusterPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetMaxClustersPerUser">ResetMaxClustersPerUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyDefinitionOverrides">ResetPolicyFamilyDefinitionOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyId">ResetPolicyFamilyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDefinition"></a>

```csharp
private void ResetDefinition()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetIsDefault"></a>

```csharp
private void ResetIsDefault()
```

##### `ResetMaxClustersPerUser` <a name="ResetMaxClustersPerUser" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetMaxClustersPerUser"></a>

```csharp
private void ResetMaxClustersPerUser()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPolicyFamilyDefinitionOverrides` <a name="ResetPolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyDefinitionOverrides"></a>

```csharp
private void ResetPolicyFamilyDefinitionOverrides()
```

##### `ResetPolicyFamilyId` <a name="ResetPolicyFamilyId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyId"></a>

```csharp
private void ResetPolicyFamilyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksClusterPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksClusterPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksClusterPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksClusterPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksClusterPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksClusterPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksClusterPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksClusterPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksClusterPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definitionInput">DefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefaultInput">IsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUserInput">MaxClustersPerUserInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverridesInput">PolicyFamilyDefinitionOverridesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyIdInput">PolicyFamilyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefault">IsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUser">MaxClustersPerUser</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverrides">PolicyFamilyDefinitionOverrides</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyId">PolicyFamilyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definitionInput"></a>

```csharp
public string DefinitionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefaultInput"></a>

```csharp
public object IsDefaultInput { get; }
```

- *Type:* object

---

##### `MaxClustersPerUserInput`<sup>Optional</sup> <a name="MaxClustersPerUserInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUserInput"></a>

```csharp
public double MaxClustersPerUserInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyFamilyDefinitionOverridesInput`<sup>Optional</sup> <a name="PolicyFamilyDefinitionOverridesInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverridesInput"></a>

```csharp
public string PolicyFamilyDefinitionOverridesInput { get; }
```

- *Type:* string

---

##### `PolicyFamilyIdInput`<sup>Optional</sup> <a name="PolicyFamilyIdInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyIdInput"></a>

```csharp
public string PolicyFamilyIdInput { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefault"></a>

```csharp
public object IsDefault { get; }
```

- *Type:* object

---

##### `MaxClustersPerUser`<sup>Required</sup> <a name="MaxClustersPerUser" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUser"></a>

```csharp
public double MaxClustersPerUser { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyFamilyDefinitionOverrides`<sup>Required</sup> <a name="PolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverrides"></a>

```csharp
public string PolicyFamilyDefinitionOverrides { get; }
```

- *Type:* string

---

##### `PolicyFamilyId`<sup>Required</sup> <a name="PolicyFamilyId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyId"></a>

```csharp
public string PolicyFamilyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksClusterPolicyConfig <a name="DataDatabricksClusterPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksClusterPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Definition = null,
    string Description = null,
    string Id = null,
    object IsDefault = null,
    double MaxClustersPerUser = null,
    string Name = null,
    string PolicyFamilyDefinitionOverrides = null,
    string PolicyFamilyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.definition">Definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#definition DataDatabricksClusterPolicy#definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#description DataDatabricksClusterPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#id DataDatabricksClusterPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.isDefault">IsDefault</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#is_default DataDatabricksClusterPolicy#is_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.maxClustersPerUser">MaxClustersPerUser</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#max_clusters_per_user DataDatabricksClusterPolicy#max_clusters_per_user}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#name DataDatabricksClusterPolicy#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyDefinitionOverrides">PolicyFamilyDefinitionOverrides</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#policy_family_definition_overrides DataDatabricksClusterPolicy#policy_family_definition_overrides}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyId">PolicyFamilyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#policy_family_id DataDatabricksClusterPolicy#policy_family_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.definition"></a>

```csharp
public string Definition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#definition DataDatabricksClusterPolicy#definition}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#description DataDatabricksClusterPolicy#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#id DataDatabricksClusterPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.isDefault"></a>

```csharp
public object IsDefault { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#is_default DataDatabricksClusterPolicy#is_default}.

---

##### `MaxClustersPerUser`<sup>Optional</sup> <a name="MaxClustersPerUser" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.maxClustersPerUser"></a>

```csharp
public double MaxClustersPerUser { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#max_clusters_per_user DataDatabricksClusterPolicy#max_clusters_per_user}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#name DataDatabricksClusterPolicy#name}.

---

##### `PolicyFamilyDefinitionOverrides`<sup>Optional</sup> <a name="PolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyDefinitionOverrides"></a>

```csharp
public string PolicyFamilyDefinitionOverrides { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#policy_family_definition_overrides DataDatabricksClusterPolicy#policy_family_definition_overrides}.

---

##### `PolicyFamilyId`<sup>Optional</sup> <a name="PolicyFamilyId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyId"></a>

```csharp
public string PolicyFamilyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/cluster_policy#policy_family_id DataDatabricksClusterPolicy#policy_family_id}.

---



