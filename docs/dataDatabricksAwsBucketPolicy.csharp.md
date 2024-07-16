# `dataDatabricksAwsBucketPolicy` Submodule <a name="`dataDatabricksAwsBucketPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsBucketPolicy <a name="DataDatabricksAwsBucketPolicy" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy databricks_aws_bucket_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAwsBucketPolicy(Construct Scope, string Id, DataDatabricksAwsBucketPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig">DataDatabricksAwsBucketPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig">DataDatabricksAwsBucketPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksAccountId">ResetDatabricksAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksE2AccountId">ResetDatabricksE2AccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetFullAccessRole">ResetFullAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDatabricksAccountId` <a name="ResetDatabricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksAccountId"></a>

```csharp
private void ResetDatabricksAccountId()
```

##### `ResetDatabricksE2AccountId` <a name="ResetDatabricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksE2AccountId"></a>

```csharp
private void ResetDatabricksE2AccountId()
```

##### `ResetFullAccessRole` <a name="ResetFullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetFullAccessRole"></a>

```csharp
private void ResetFullAccessRole()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAwsBucketPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsBucketPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsBucketPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsBucketPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsBucketPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksAwsBucketPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAwsBucketPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAwsBucketPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsBucketPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.json">Json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountIdInput">DatabricksAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountIdInput">DatabricksE2AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRoleInput">FullAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountId">DatabricksAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountId">DatabricksE2AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRole">FullAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DatabricksAccountIdInput`<sup>Optional</sup> <a name="DatabricksAccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountIdInput"></a>

```csharp
public string DatabricksAccountIdInput { get; }
```

- *Type:* string

---

##### `DatabricksE2AccountIdInput`<sup>Optional</sup> <a name="DatabricksE2AccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountIdInput"></a>

```csharp
public string DatabricksE2AccountIdInput { get; }
```

- *Type:* string

---

##### `FullAccessRoleInput`<sup>Optional</sup> <a name="FullAccessRoleInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRoleInput"></a>

```csharp
public string FullAccessRoleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DatabricksAccountId`<sup>Required</sup> <a name="DatabricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountId"></a>

```csharp
public string DatabricksAccountId { get; }
```

- *Type:* string

---

##### `DatabricksE2AccountId`<sup>Required</sup> <a name="DatabricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountId"></a>

```csharp
public string DatabricksE2AccountId { get; }
```

- *Type:* string

---

##### `FullAccessRole`<sup>Required</sup> <a name="FullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRole"></a>

```csharp
public string FullAccessRole { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsBucketPolicyConfig <a name="DataDatabricksAwsBucketPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAwsBucketPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string DatabricksAccountId = null,
    string DatabricksE2AccountId = null,
    string FullAccessRole = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksAccountId">DatabricksAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksE2AccountId">DatabricksE2AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy#databricks_e2_account_id DataDatabricksAwsBucketPolicy#databricks_e2_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.fullAccessRole">FullAccessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}.

---

##### `DatabricksAccountId`<sup>Optional</sup> <a name="DatabricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksAccountId"></a>

```csharp
public string DatabricksAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}.

---

##### `DatabricksE2AccountId`<sup>Optional</sup> <a name="DatabricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksE2AccountId"></a>

```csharp
public string DatabricksE2AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy#databricks_e2_account_id DataDatabricksAwsBucketPolicy#databricks_e2_account_id}.

---

##### `FullAccessRole`<sup>Optional</sup> <a name="FullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.fullAccessRole"></a>

```csharp
public string FullAccessRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



