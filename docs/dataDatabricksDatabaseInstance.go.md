# `dataDatabricksDatabaseInstance` Submodule <a name="`dataDatabricksDatabaseInstance` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseInstance <a name="DataDatabricksDatabaseInstance" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance databricks_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstance"

datadatabricksdatabaseinstance.NewDataDatabricksDatabaseInstance(scope Construct, id *string, config DataDatabricksDatabaseInstanceConfig) DataDatabricksDatabaseInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig">DataDatabricksDatabaseInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig">DataDatabricksDatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.putParentInstanceRef">PutParentInstanceRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetEnableReadableSecondaries">ResetEnableReadableSecondaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetParentInstanceRef">ResetParentInstanceRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetRetentionWindowInDays">ResetRetentionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetStopped">ResetStopped</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutParentInstanceRef` <a name="PutParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.putParentInstanceRef"></a>

```go
func PutParentInstanceRef(value DataDatabricksDatabaseInstanceParentInstanceRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.putParentInstanceRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef">DataDatabricksDatabaseInstanceParentInstanceRef</a>

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetCapacity"></a>

```go
func ResetCapacity()
```

##### `ResetEnableReadableSecondaries` <a name="ResetEnableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetEnableReadableSecondaries"></a>

```go
func ResetEnableReadableSecondaries()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetParentInstanceRef` <a name="ResetParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetParentInstanceRef"></a>

```go
func ResetParentInstanceRef()
```

##### `ResetRetentionWindowInDays` <a name="ResetRetentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetRetentionWindowInDays"></a>

```go
func ResetRetentionWindowInDays()
```

##### `ResetStopped` <a name="ResetStopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetStopped"></a>

```go
func ResetStopped()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstance"

datadatabricksdatabaseinstance.DataDatabricksDatabaseInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstance"

datadatabricksdatabaseinstance.DataDatabricksDatabaseInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstance"

datadatabricksdatabaseinstance.DataDatabricksDatabaseInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstance"

datadatabricksdatabaseinstance.DataDatabricksDatabaseInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksDatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDatabaseInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.childInstanceRefs">ChildInstanceRefs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList">DataDatabricksDatabaseInstanceChildInstanceRefsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnableReadableSecondaries">EffectiveEnableReadableSecondaries</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveNodeCount">EffectiveNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveRetentionWindowInDays">EffectiveRetentionWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveStopped">EffectiveStopped</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.parentInstanceRef">ParentInstanceRef</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference">DataDatabricksDatabaseInstanceParentInstanceRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.pgVersion">PgVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readOnlyDns">ReadOnlyDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readWriteDns">ReadWriteDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.capacityInput">CapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enableReadableSecondariesInput">EnableReadableSecondariesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.parentInstanceRefInput">ParentInstanceRefInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.retentionWindowInDaysInput">RetentionWindowInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.stoppedInput">StoppedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.capacity">Capacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.retentionWindowInDays">RetentionWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.stopped">Stopped</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ChildInstanceRefs`<sup>Required</sup> <a name="ChildInstanceRefs" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.childInstanceRefs"></a>

```go
func ChildInstanceRefs() DataDatabricksDatabaseInstanceChildInstanceRefsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList">DataDatabricksDatabaseInstanceChildInstanceRefsList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `EffectiveEnableReadableSecondaries`<sup>Required</sup> <a name="EffectiveEnableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnableReadableSecondaries"></a>

```go
func EffectiveEnableReadableSecondaries() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EffectiveNodeCount`<sup>Required</sup> <a name="EffectiveNodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveNodeCount"></a>

```go
func EffectiveNodeCount() *f64
```

- *Type:* *f64

---

##### `EffectiveRetentionWindowInDays`<sup>Required</sup> <a name="EffectiveRetentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveRetentionWindowInDays"></a>

```go
func EffectiveRetentionWindowInDays() *f64
```

- *Type:* *f64

---

##### `EffectiveStopped`<sup>Required</sup> <a name="EffectiveStopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveStopped"></a>

```go
func EffectiveStopped() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ParentInstanceRef`<sup>Required</sup> <a name="ParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.parentInstanceRef"></a>

```go
func ParentInstanceRef() DataDatabricksDatabaseInstanceParentInstanceRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference">DataDatabricksDatabaseInstanceParentInstanceRefOutputReference</a>

---

##### `PgVersion`<sup>Required</sup> <a name="PgVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.pgVersion"></a>

```go
func PgVersion() *string
```

- *Type:* *string

---

##### `ReadOnlyDns`<sup>Required</sup> <a name="ReadOnlyDns" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readOnlyDns"></a>

```go
func ReadOnlyDns() *string
```

- *Type:* *string

---

##### `ReadWriteDns`<sup>Required</sup> <a name="ReadWriteDns" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readWriteDns"></a>

```go
func ReadWriteDns() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.capacityInput"></a>

```go
func CapacityInput() *string
```

- *Type:* *string

---

##### `EnableReadableSecondariesInput`<sup>Optional</sup> <a name="EnableReadableSecondariesInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enableReadableSecondariesInput"></a>

```go
func EnableReadableSecondariesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `ParentInstanceRefInput`<sup>Optional</sup> <a name="ParentInstanceRefInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.parentInstanceRefInput"></a>

```go
func ParentInstanceRefInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionWindowInDaysInput`<sup>Optional</sup> <a name="RetentionWindowInDaysInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.retentionWindowInDaysInput"></a>

```go
func RetentionWindowInDaysInput() *f64
```

- *Type:* *f64

---

##### `StoppedInput`<sup>Optional</sup> <a name="StoppedInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.stoppedInput"></a>

```go
func StoppedInput() interface{}
```

- *Type:* interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.capacity"></a>

```go
func Capacity() *string
```

- *Type:* *string

---

##### `EnableReadableSecondaries`<sup>Required</sup> <a name="EnableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enableReadableSecondaries"></a>

```go
func EnableReadableSecondaries() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `RetentionWindowInDays`<sup>Required</sup> <a name="RetentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.retentionWindowInDays"></a>

```go
func RetentionWindowInDays() *f64
```

- *Type:* *f64

---

##### `Stopped`<sup>Required</sup> <a name="Stopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.stopped"></a>

```go
func Stopped() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseInstanceChildInstanceRefs <a name="DataDatabricksDatabaseInstanceChildInstanceRefs" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstance"

&datadatabricksdatabaseinstance.DataDatabricksDatabaseInstanceChildInstanceRefs {
	BranchTime: *string,
	Lsn: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.branchTime">BranchTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.lsn">Lsn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |

---

##### `BranchTime`<sup>Optional</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.branchTime"></a>

```go
BranchTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}.

---

##### `Lsn`<sup>Optional</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.lsn"></a>

```go
Lsn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

### DataDatabricksDatabaseInstanceConfig <a name="DataDatabricksDatabaseInstanceConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstance"

&datadatabricksdatabaseinstance.DataDatabricksDatabaseInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Capacity: *string,
	EnableReadableSecondaries: interface{},
	NodeCount: *f64,
	ParentInstanceRef: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef,
	RetentionWindowInDays: *f64,
	Stopped: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.capacity">Capacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#capacity DataDatabricksDatabaseInstance#capacity}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#enable_readable_secondaries DataDatabricksDatabaseInstance#enable_readable_secondaries}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#node_count DataDatabricksDatabaseInstance#node_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.parentInstanceRef">ParentInstanceRef</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef">DataDatabricksDatabaseInstanceParentInstanceRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#parent_instance_ref DataDatabricksDatabaseInstance#parent_instance_ref}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.retentionWindowInDays">RetentionWindowInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#retention_window_in_days DataDatabricksDatabaseInstance#retention_window_in_days}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.stopped">Stopped</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#stopped DataDatabricksDatabaseInstance#stopped}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.capacity"></a>

```go
Capacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#capacity DataDatabricksDatabaseInstance#capacity}.

---

##### `EnableReadableSecondaries`<sup>Optional</sup> <a name="EnableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.enableReadableSecondaries"></a>

```go
EnableReadableSecondaries interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#enable_readable_secondaries DataDatabricksDatabaseInstance#enable_readable_secondaries}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#node_count DataDatabricksDatabaseInstance#node_count}.

---

##### `ParentInstanceRef`<sup>Optional</sup> <a name="ParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.parentInstanceRef"></a>

```go
ParentInstanceRef DataDatabricksDatabaseInstanceParentInstanceRef
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef">DataDatabricksDatabaseInstanceParentInstanceRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#parent_instance_ref DataDatabricksDatabaseInstance#parent_instance_ref}.

---

##### `RetentionWindowInDays`<sup>Optional</sup> <a name="RetentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.retentionWindowInDays"></a>

```go
RetentionWindowInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#retention_window_in_days DataDatabricksDatabaseInstance#retention_window_in_days}.

---

##### `Stopped`<sup>Optional</sup> <a name="Stopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.stopped"></a>

```go
Stopped interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#stopped DataDatabricksDatabaseInstance#stopped}.

---

### DataDatabricksDatabaseInstanceParentInstanceRef <a name="DataDatabricksDatabaseInstanceParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstance"

&datadatabricksdatabaseinstance.DataDatabricksDatabaseInstanceParentInstanceRef {
	BranchTime: *string,
	Lsn: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.branchTime">BranchTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.lsn">Lsn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |

---

##### `BranchTime`<sup>Optional</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.branchTime"></a>

```go
BranchTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}.

---

##### `Lsn`<sup>Optional</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.lsn"></a>

```go
Lsn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseInstanceChildInstanceRefsList <a name="DataDatabricksDatabaseInstanceChildInstanceRefsList" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstance"

datadatabricksdatabaseinstance.NewDataDatabricksDatabaseInstanceChildInstanceRefsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDatabaseInstanceChildInstanceRefsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get"></a>

```go
func Get(index *f64) DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference <a name="DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstance"

datadatabricksdatabaseinstance.NewDataDatabricksDatabaseInstanceChildInstanceRefsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime">ResetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetLsn">ResetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchTime` <a name="ResetBranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime"></a>

```go
func ResetBranchTime()
```

##### `ResetLsn` <a name="ResetLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetLsn"></a>

```go
func ResetLsn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn">EffectiveLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput">BranchTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput">LsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTime">BranchTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsn">Lsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveLsn`<sup>Required</sup> <a name="EffectiveLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn"></a>

```go
func EffectiveLsn() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `BranchTimeInput`<sup>Optional</sup> <a name="BranchTimeInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput"></a>

```go
func BranchTimeInput() *string
```

- *Type:* *string

---

##### `LsnInput`<sup>Optional</sup> <a name="LsnInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput"></a>

```go
func LsnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BranchTime`<sup>Required</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTime"></a>

```go
func BranchTime() *string
```

- *Type:* *string

---

##### `Lsn`<sup>Required</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsn"></a>

```go
func Lsn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseInstanceChildInstanceRefs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a>

---


### DataDatabricksDatabaseInstanceParentInstanceRefOutputReference <a name="DataDatabricksDatabaseInstanceParentInstanceRefOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstance"

datadatabricksdatabaseinstance.NewDataDatabricksDatabaseInstanceParentInstanceRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseInstanceParentInstanceRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetBranchTime">ResetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetLsn">ResetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchTime` <a name="ResetBranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetBranchTime"></a>

```go
func ResetBranchTime()
```

##### `ResetLsn` <a name="ResetLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetLsn"></a>

```go
func ResetLsn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn">EffectiveLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput">BranchTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsnInput">LsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTime">BranchTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsn">Lsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveLsn`<sup>Required</sup> <a name="EffectiveLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn"></a>

```go
func EffectiveLsn() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `BranchTimeInput`<sup>Optional</sup> <a name="BranchTimeInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput"></a>

```go
func BranchTimeInput() *string
```

- *Type:* *string

---

##### `LsnInput`<sup>Optional</sup> <a name="LsnInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsnInput"></a>

```go
func LsnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BranchTime`<sup>Required</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTime"></a>

```go
func BranchTime() *string
```

- *Type:* *string

---

##### `Lsn`<sup>Required</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsn"></a>

```go
func Lsn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



