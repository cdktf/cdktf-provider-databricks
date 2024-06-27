# `dataDatabricksCluster` Submodule <a name="`dataDatabricksCluster` Submodule" id="@cdktf/provider-databricks.dataDatabricksCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCluster <a name="DataDatabricksCluster" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster databricks_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksCluster(scope Construct, id *string, config DataDatabricksClusterConfig) DataDatabricksCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig">DataDatabricksClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig">DataDatabricksClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo">PutClusterInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterInfo">ResetClusterInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutClusterInfo` <a name="PutClusterInfo" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo"></a>

```go
func PutClusterInfo(value DataDatabricksClusterClusterInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a>

---

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetClusterInfo` <a name="ResetClusterInfo" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterInfo"></a>

```go
func ResetClusterInfo()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.DataDatabricksCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.DataDatabricksCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.DataDatabricksCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.DataDatabricksCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterInfo">ClusterInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference">DataDatabricksClusterClusterInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterInfoInput">ClusterInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ClusterInfo`<sup>Required</sup> <a name="ClusterInfo" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterInfo"></a>

```go
func ClusterInfo() DataDatabricksClusterClusterInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference">DataDatabricksClusterClusterInfoOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ClusterInfoInput`<sup>Optional</sup> <a name="ClusterInfoInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterInfoInput"></a>

```go
func ClusterInfoInput() DataDatabricksClusterClusterInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksClusterClusterInfo <a name="DataDatabricksClusterClusterInfo" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfo {
	DefaultTags: *map[string]*string,
	SparkVersion: *string,
	State: *string,
	Autoscale: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale,
	AutoterminationMinutes: *f64,
	AwsAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes,
	AzureAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes,
	ClusterCores: *f64,
	ClusterId: *string,
	ClusterLogConf: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf,
	ClusterLogStatus: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus,
	ClusterMemoryMb: *f64,
	ClusterName: *string,
	CreatorUserName: *string,
	CustomTags: *map[string]*string,
	DataSecurityMode: *string,
	DockerImage: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage,
	Driver: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver,
	DriverInstancePoolId: *string,
	DriverNodeTypeId: *string,
	EnableElasticDisk: interface{},
	EnableLocalDiskEncryption: interface{},
	Executors: interface{},
	GcpAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes,
	InitScripts: interface{},
	InstancePoolId: *string,
	JdbcPort: *f64,
	LastActivityTime: *f64,
	LastStateLossTime: *f64,
	NodeTypeId: *string,
	NumWorkers: *f64,
	PolicyId: *string,
	RuntimeEngine: *string,
	SingleUserName: *string,
	SparkConf: *map[string]*string,
	SparkContextId: *f64,
	SparkEnvVars: *map[string]*string,
	SshPublicKeys: *[]*string,
	StartTime: *f64,
	StateMessage: *string,
	TerminateTime: *f64,
	TerminationReason: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.defaultTags">DefaultTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#default_tags DataDatabricksCluster#default_tags}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkVersion">SparkVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spark_version DataDatabricksCluster#spark_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#state DataDatabricksCluster#state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.autoterminationMinutes">AutoterminationMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#autotermination_minutes DataDatabricksCluster#autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterCores">ClusterCores</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_cores DataDatabricksCluster#cluster_cores}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterLogStatus">ClusterLogStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a></code> | cluster_log_status block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterMemoryMb">ClusterMemoryMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_memory_mb DataDatabricksCluster#cluster_memory_mb}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.creatorUserName">CreatorUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#creator_user_name DataDatabricksCluster#creator_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#custom_tags DataDatabricksCluster#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.dataSecurityMode">DataSecurityMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#data_security_mode DataDatabricksCluster#data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.dockerImage">DockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a></code> | docker_image block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driver">Driver</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a></code> | driver block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#driver_instance_pool_id DataDatabricksCluster#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#driver_node_type_id DataDatabricksCluster#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#enable_elastic_disk DataDatabricksCluster#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#enable_local_disk_encryption DataDatabricksCluster#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.executors">Executors</a></code> | <code>interface{}</code> | executors block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.initScripts">InitScripts</a></code> | <code>interface{}</code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#instance_pool_id DataDatabricksCluster#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.jdbcPort">JdbcPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#jdbc_port DataDatabricksCluster#jdbc_port}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.lastActivityTime">LastActivityTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#last_activity_time DataDatabricksCluster#last_activity_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.lastStateLossTime">LastStateLossTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#last_state_loss_time DataDatabricksCluster#last_state_loss_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#node_type_id DataDatabricksCluster#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#num_workers DataDatabricksCluster#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#policy_id DataDatabricksCluster#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.runtimeEngine">RuntimeEngine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#runtime_engine DataDatabricksCluster#runtime_engine}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.singleUserName">SingleUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#single_user_name DataDatabricksCluster#single_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkConf">SparkConf</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spark_conf DataDatabricksCluster#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkContextId">SparkContextId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spark_context_id DataDatabricksCluster#spark_context_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkEnvVars">SparkEnvVars</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spark_env_vars DataDatabricksCluster#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#ssh_public_keys DataDatabricksCluster#ssh_public_keys}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.startTime">StartTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#start_time DataDatabricksCluster#start_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.stateMessage">StateMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#state_message DataDatabricksCluster#state_message}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.terminateTime">TerminateTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#terminate_time DataDatabricksCluster#terminate_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.terminationReason">TerminationReason</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a></code> | termination_reason block. |

---

##### `DefaultTags`<sup>Required</sup> <a name="DefaultTags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.defaultTags"></a>

```go
DefaultTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#default_tags DataDatabricksCluster#default_tags}.

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkVersion"></a>

```go
SparkVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spark_version DataDatabricksCluster#spark_version}.

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#state DataDatabricksCluster#state}.

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.autoscale"></a>

```go
Autoscale DataDatabricksClusterClusterInfoAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#autoscale DataDatabricksCluster#autoscale}

---

##### `AutoterminationMinutes`<sup>Optional</sup> <a name="AutoterminationMinutes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.autoterminationMinutes"></a>

```go
AutoterminationMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#autotermination_minutes DataDatabricksCluster#autotermination_minutes}.

---

##### `AwsAttributes`<sup>Optional</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.awsAttributes"></a>

```go
AwsAttributes DataDatabricksClusterClusterInfoAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#aws_attributes DataDatabricksCluster#aws_attributes}

---

##### `AzureAttributes`<sup>Optional</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.azureAttributes"></a>

```go
AzureAttributes DataDatabricksClusterClusterInfoAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#azure_attributes DataDatabricksCluster#azure_attributes}

---

##### `ClusterCores`<sup>Optional</sup> <a name="ClusterCores" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterCores"></a>

```go
ClusterCores *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_cores DataDatabricksCluster#cluster_cores}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}.

---

##### `ClusterLogConf`<sup>Optional</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterLogConf"></a>

```go
ClusterLogConf DataDatabricksClusterClusterInfoClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_log_conf DataDatabricksCluster#cluster_log_conf}

---

##### `ClusterLogStatus`<sup>Optional</sup> <a name="ClusterLogStatus" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterLogStatus"></a>

```go
ClusterLogStatus DataDatabricksClusterClusterInfoClusterLogStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a>

cluster_log_status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_log_status DataDatabricksCluster#cluster_log_status}

---

##### `ClusterMemoryMb`<sup>Optional</sup> <a name="ClusterMemoryMb" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterMemoryMb"></a>

```go
ClusterMemoryMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_memory_mb DataDatabricksCluster#cluster_memory_mb}.

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}.

---

##### `CreatorUserName`<sup>Optional</sup> <a name="CreatorUserName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.creatorUserName"></a>

```go
CreatorUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#creator_user_name DataDatabricksCluster#creator_user_name}.

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.customTags"></a>

```go
CustomTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#custom_tags DataDatabricksCluster#custom_tags}.

---

##### `DataSecurityMode`<sup>Optional</sup> <a name="DataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.dataSecurityMode"></a>

```go
DataSecurityMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#data_security_mode DataDatabricksCluster#data_security_mode}.

---

##### `DockerImage`<sup>Optional</sup> <a name="DockerImage" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.dockerImage"></a>

```go
DockerImage DataDatabricksClusterClusterInfoDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a>

docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#docker_image DataDatabricksCluster#docker_image}

---

##### `Driver`<sup>Optional</sup> <a name="Driver" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driver"></a>

```go
Driver DataDatabricksClusterClusterInfoDriver
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a>

driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#driver DataDatabricksCluster#driver}

---

##### `DriverInstancePoolId`<sup>Optional</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driverInstancePoolId"></a>

```go
DriverInstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#driver_instance_pool_id DataDatabricksCluster#driver_instance_pool_id}.

---

##### `DriverNodeTypeId`<sup>Optional</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driverNodeTypeId"></a>

```go
DriverNodeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#driver_node_type_id DataDatabricksCluster#driver_node_type_id}.

---

##### `EnableElasticDisk`<sup>Optional</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.enableElasticDisk"></a>

```go
EnableElasticDisk interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#enable_elastic_disk DataDatabricksCluster#enable_elastic_disk}.

---

##### `EnableLocalDiskEncryption`<sup>Optional</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.enableLocalDiskEncryption"></a>

```go
EnableLocalDiskEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#enable_local_disk_encryption DataDatabricksCluster#enable_local_disk_encryption}.

---

##### `Executors`<sup>Optional</sup> <a name="Executors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.executors"></a>

```go
Executors interface{}
```

- *Type:* interface{}

executors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#executors DataDatabricksCluster#executors}

---

##### `GcpAttributes`<sup>Optional</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.gcpAttributes"></a>

```go
GcpAttributes DataDatabricksClusterClusterInfoGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#gcp_attributes DataDatabricksCluster#gcp_attributes}

---

##### `InitScripts`<sup>Optional</sup> <a name="InitScripts" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.initScripts"></a>

```go
InitScripts interface{}
```

- *Type:* interface{}

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#init_scripts DataDatabricksCluster#init_scripts}

---

##### `InstancePoolId`<sup>Optional</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.instancePoolId"></a>

```go
InstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#instance_pool_id DataDatabricksCluster#instance_pool_id}.

---

##### `JdbcPort`<sup>Optional</sup> <a name="JdbcPort" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.jdbcPort"></a>

```go
JdbcPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#jdbc_port DataDatabricksCluster#jdbc_port}.

---

##### `LastActivityTime`<sup>Optional</sup> <a name="LastActivityTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.lastActivityTime"></a>

```go
LastActivityTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#last_activity_time DataDatabricksCluster#last_activity_time}.

---

##### `LastStateLossTime`<sup>Optional</sup> <a name="LastStateLossTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.lastStateLossTime"></a>

```go
LastStateLossTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#last_state_loss_time DataDatabricksCluster#last_state_loss_time}.

---

##### `NodeTypeId`<sup>Optional</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.nodeTypeId"></a>

```go
NodeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#node_type_id DataDatabricksCluster#node_type_id}.

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.numWorkers"></a>

```go
NumWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#num_workers DataDatabricksCluster#num_workers}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#policy_id DataDatabricksCluster#policy_id}.

---

##### `RuntimeEngine`<sup>Optional</sup> <a name="RuntimeEngine" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.runtimeEngine"></a>

```go
RuntimeEngine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#runtime_engine DataDatabricksCluster#runtime_engine}.

---

##### `SingleUserName`<sup>Optional</sup> <a name="SingleUserName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.singleUserName"></a>

```go
SingleUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#single_user_name DataDatabricksCluster#single_user_name}.

---

##### `SparkConf`<sup>Optional</sup> <a name="SparkConf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkConf"></a>

```go
SparkConf *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spark_conf DataDatabricksCluster#spark_conf}.

---

##### `SparkContextId`<sup>Optional</sup> <a name="SparkContextId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkContextId"></a>

```go
SparkContextId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spark_context_id DataDatabricksCluster#spark_context_id}.

---

##### `SparkEnvVars`<sup>Optional</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkEnvVars"></a>

```go
SparkEnvVars *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spark_env_vars DataDatabricksCluster#spark_env_vars}.

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#ssh_public_keys DataDatabricksCluster#ssh_public_keys}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.startTime"></a>

```go
StartTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#start_time DataDatabricksCluster#start_time}.

---

##### `StateMessage`<sup>Optional</sup> <a name="StateMessage" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.stateMessage"></a>

```go
StateMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#state_message DataDatabricksCluster#state_message}.

---

##### `TerminateTime`<sup>Optional</sup> <a name="TerminateTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.terminateTime"></a>

```go
TerminateTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#terminate_time DataDatabricksCluster#terminate_time}.

---

##### `TerminationReason`<sup>Optional</sup> <a name="TerminationReason" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.terminationReason"></a>

```go
TerminationReason DataDatabricksClusterClusterInfoTerminationReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a>

termination_reason block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#termination_reason DataDatabricksCluster#termination_reason}

---

### DataDatabricksClusterClusterInfoAutoscale <a name="DataDatabricksClusterClusterInfoAutoscale" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoAutoscale {
	MaxWorkers: *f64,
	MinWorkers: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#max_workers DataDatabricksCluster#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale.property.minWorkers">MinWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#min_workers DataDatabricksCluster#min_workers}. |

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#max_workers DataDatabricksCluster#max_workers}.

---

##### `MinWorkers`<sup>Optional</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale.property.minWorkers"></a>

```go
MinWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#min_workers DataDatabricksCluster#min_workers}.

---

### DataDatabricksClusterClusterInfoAwsAttributes <a name="DataDatabricksClusterClusterInfoAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoAwsAttributes {
	Availability: *string,
	EbsVolumeCount: *f64,
	EbsVolumeSize: *f64,
	EbsVolumeType: *string,
	FirstOnDemand: *f64,
	InstanceProfileArn: *string,
	SpotBidPricePercent: *f64,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#availability DataDatabricksCluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#ebs_volume_count DataDatabricksCluster#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#ebs_volume_size DataDatabricksCluster#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#ebs_volume_type DataDatabricksCluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#instance_profile_arn DataDatabricksCluster#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spot_bid_price_percent DataDatabricksCluster#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#availability DataDatabricksCluster#availability}.

---

##### `EbsVolumeCount`<sup>Optional</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeCount"></a>

```go
EbsVolumeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#ebs_volume_count DataDatabricksCluster#ebs_volume_count}.

---

##### `EbsVolumeSize`<sup>Optional</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeSize"></a>

```go
EbsVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#ebs_volume_size DataDatabricksCluster#ebs_volume_size}.

---

##### `EbsVolumeType`<sup>Optional</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeType"></a>

```go
EbsVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#ebs_volume_type DataDatabricksCluster#ebs_volume_type}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.firstOnDemand"></a>

```go
FirstOnDemand *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.instanceProfileArn"></a>

```go
InstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#instance_profile_arn DataDatabricksCluster#instance_profile_arn}.

---

##### `SpotBidPricePercent`<sup>Optional</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.spotBidPricePercent"></a>

```go
SpotBidPricePercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spot_bid_price_percent DataDatabricksCluster#spot_bid_price_percent}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}.

---

### DataDatabricksClusterClusterInfoAzureAttributes <a name="DataDatabricksClusterClusterInfoAzureAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoAzureAttributes {
	Availability: *string,
	FirstOnDemand: *f64,
	SpotBidMaxPrice: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#availability DataDatabricksCluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spot_bid_max_price DataDatabricksCluster#spot_bid_max_price}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#availability DataDatabricksCluster#availability}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.firstOnDemand"></a>

```go
FirstOnDemand *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}.

---

##### `SpotBidMaxPrice`<sup>Optional</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.spotBidMaxPrice"></a>

```go
SpotBidMaxPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#spot_bid_max_price DataDatabricksCluster#spot_bid_max_price}.

---

### DataDatabricksClusterClusterInfoClusterLogConf <a name="DataDatabricksClusterClusterInfoClusterLogConf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoClusterLogConf {
	Dbfs: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs,
	S3: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a></code> | s3 block. |

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf.property.dbfs"></a>

```go
Dbfs DataDatabricksClusterClusterInfoClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#dbfs DataDatabricksCluster#dbfs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf.property.s3"></a>

```go
S3 DataDatabricksClusterClusterInfoClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#s3 DataDatabricksCluster#s3}

---

### DataDatabricksClusterClusterInfoClusterLogConfDbfs <a name="DataDatabricksClusterClusterInfoClusterLogConfDbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoClusterLogConfS3 <a name="DataDatabricksClusterClusterInfoClusterLogConfS3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoClusterLogConfS3 {
	Destination: *string,
	CannedAcl: *string,
	EnableEncryption: interface{},
	EncryptionType: *string,
	Endpoint: *string,
	KmsKey: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#region DataDatabricksCluster#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.cannedAcl"></a>

```go
CannedAcl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.enableEncryption"></a>

```go
EnableEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#region DataDatabricksCluster#region}.

---

### DataDatabricksClusterClusterInfoClusterLogStatus <a name="DataDatabricksClusterClusterInfoClusterLogStatus" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoClusterLogStatus {
	LastAttempted: *f64,
	LastException: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus.property.lastAttempted">LastAttempted</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#last_attempted DataDatabricksCluster#last_attempted}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus.property.lastException">LastException</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#last_exception DataDatabricksCluster#last_exception}. |

---

##### `LastAttempted`<sup>Optional</sup> <a name="LastAttempted" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus.property.lastAttempted"></a>

```go
LastAttempted *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#last_attempted DataDatabricksCluster#last_attempted}.

---

##### `LastException`<sup>Optional</sup> <a name="LastException" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus.property.lastException"></a>

```go
LastException *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#last_exception DataDatabricksCluster#last_exception}.

---

### DataDatabricksClusterClusterInfoDockerImage <a name="DataDatabricksClusterClusterInfoDockerImage" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoDockerImage {
	Url: *string,
	BasicAuth: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#url DataDatabricksCluster#url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#url DataDatabricksCluster#url}.

---

##### `BasicAuth`<sup>Optional</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage.property.basicAuth"></a>

```go
BasicAuth DataDatabricksClusterClusterInfoDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#basic_auth DataDatabricksCluster#basic_auth}

---

### DataDatabricksClusterClusterInfoDockerImageBasicAuth <a name="DataDatabricksClusterClusterInfoDockerImageBasicAuth" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#password DataDatabricksCluster#password}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#username DataDatabricksCluster#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#password DataDatabricksCluster#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#username DataDatabricksCluster#username}.

---

### DataDatabricksClusterClusterInfoDriver <a name="DataDatabricksClusterClusterInfoDriver" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoDriver {
	HostPrivateIp: *string,
	InstanceId: *string,
	NodeAwsAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes,
	NodeId: *string,
	PrivateIp: *string,
	PublicDns: *string,
	StartTimestamp: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.hostPrivateIp">HostPrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#host_private_ip DataDatabricksCluster#host_private_ip}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#instance_id DataDatabricksCluster#instance_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.nodeAwsAttributes">NodeAwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a></code> | node_aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.nodeId">NodeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#node_id DataDatabricksCluster#node_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#private_ip DataDatabricksCluster#private_ip}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.publicDns">PublicDns</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#public_dns DataDatabricksCluster#public_dns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.startTimestamp">StartTimestamp</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#start_timestamp DataDatabricksCluster#start_timestamp}. |

---

##### `HostPrivateIp`<sup>Optional</sup> <a name="HostPrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.hostPrivateIp"></a>

```go
HostPrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#host_private_ip DataDatabricksCluster#host_private_ip}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#instance_id DataDatabricksCluster#instance_id}.

---

##### `NodeAwsAttributes`<sup>Optional</sup> <a name="NodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.nodeAwsAttributes"></a>

```go
NodeAwsAttributes DataDatabricksClusterClusterInfoDriverNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a>

node_aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#node_aws_attributes DataDatabricksCluster#node_aws_attributes}

---

##### `NodeId`<sup>Optional</sup> <a name="NodeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.nodeId"></a>

```go
NodeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#node_id DataDatabricksCluster#node_id}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#private_ip DataDatabricksCluster#private_ip}.

---

##### `PublicDns`<sup>Optional</sup> <a name="PublicDns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.publicDns"></a>

```go
PublicDns *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#public_dns DataDatabricksCluster#public_dns}.

---

##### `StartTimestamp`<sup>Optional</sup> <a name="StartTimestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.startTimestamp"></a>

```go
StartTimestamp *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#start_timestamp DataDatabricksCluster#start_timestamp}.

---

### DataDatabricksClusterClusterInfoDriverNodeAwsAttributes <a name="DataDatabricksClusterClusterInfoDriverNodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes {
	IsSpot: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes.property.isSpot">IsSpot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}. |

---

##### `IsSpot`<sup>Optional</sup> <a name="IsSpot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes.property.isSpot"></a>

```go
IsSpot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}.

---

### DataDatabricksClusterClusterInfoExecutors <a name="DataDatabricksClusterClusterInfoExecutors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoExecutors {
	HostPrivateIp: *string,
	InstanceId: *string,
	NodeAwsAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes,
	NodeId: *string,
	PrivateIp: *string,
	PublicDns: *string,
	StartTimestamp: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.hostPrivateIp">HostPrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#host_private_ip DataDatabricksCluster#host_private_ip}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#instance_id DataDatabricksCluster#instance_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.nodeAwsAttributes">NodeAwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a></code> | node_aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.nodeId">NodeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#node_id DataDatabricksCluster#node_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#private_ip DataDatabricksCluster#private_ip}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.publicDns">PublicDns</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#public_dns DataDatabricksCluster#public_dns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.startTimestamp">StartTimestamp</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#start_timestamp DataDatabricksCluster#start_timestamp}. |

---

##### `HostPrivateIp`<sup>Optional</sup> <a name="HostPrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.hostPrivateIp"></a>

```go
HostPrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#host_private_ip DataDatabricksCluster#host_private_ip}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#instance_id DataDatabricksCluster#instance_id}.

---

##### `NodeAwsAttributes`<sup>Optional</sup> <a name="NodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.nodeAwsAttributes"></a>

```go
NodeAwsAttributes DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a>

node_aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#node_aws_attributes DataDatabricksCluster#node_aws_attributes}

---

##### `NodeId`<sup>Optional</sup> <a name="NodeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.nodeId"></a>

```go
NodeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#node_id DataDatabricksCluster#node_id}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#private_ip DataDatabricksCluster#private_ip}.

---

##### `PublicDns`<sup>Optional</sup> <a name="PublicDns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.publicDns"></a>

```go
PublicDns *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#public_dns DataDatabricksCluster#public_dns}.

---

##### `StartTimestamp`<sup>Optional</sup> <a name="StartTimestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.startTimestamp"></a>

```go
StartTimestamp *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#start_timestamp DataDatabricksCluster#start_timestamp}.

---

### DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes <a name="DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes {
	IsSpot: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes.property.isSpot">IsSpot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}. |

---

##### `IsSpot`<sup>Optional</sup> <a name="IsSpot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes.property.isSpot"></a>

```go
IsSpot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}.

---

### DataDatabricksClusterClusterInfoGcpAttributes <a name="DataDatabricksClusterClusterInfoGcpAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoGcpAttributes {
	Availability: *string,
	BootDiskSize: *f64,
	GoogleServiceAccount: *string,
	LocalSsdCount: *f64,
	UsePreemptibleExecutors: interface{},
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#availability DataDatabricksCluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.bootDiskSize">BootDiskSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#boot_disk_size DataDatabricksCluster#boot_disk_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#google_service_account DataDatabricksCluster#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.localSsdCount">LocalSsdCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#local_ssd_count DataDatabricksCluster#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.usePreemptibleExecutors">UsePreemptibleExecutors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#use_preemptible_executors DataDatabricksCluster#use_preemptible_executors}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#availability DataDatabricksCluster#availability}.

---

##### `BootDiskSize`<sup>Optional</sup> <a name="BootDiskSize" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.bootDiskSize"></a>

```go
BootDiskSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#boot_disk_size DataDatabricksCluster#boot_disk_size}.

---

##### `GoogleServiceAccount`<sup>Optional</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.googleServiceAccount"></a>

```go
GoogleServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#google_service_account DataDatabricksCluster#google_service_account}.

---

##### `LocalSsdCount`<sup>Optional</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.localSsdCount"></a>

```go
LocalSsdCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#local_ssd_count DataDatabricksCluster#local_ssd_count}.

---

##### `UsePreemptibleExecutors`<sup>Optional</sup> <a name="UsePreemptibleExecutors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.usePreemptibleExecutors"></a>

```go
UsePreemptibleExecutors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#use_preemptible_executors DataDatabricksCluster#use_preemptible_executors}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}.

---

### DataDatabricksClusterClusterInfoInitScripts <a name="DataDatabricksClusterClusterInfoInitScripts" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoInitScripts {
	Abfss: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss,
	Dbfs: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs,
	File: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile,
	Gcs: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs,
	S3: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3,
	Volumes: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes,
	Workspace: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a></code> | abfss block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a></code> | volumes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a></code> | workspace block. |

---

##### `Abfss`<sup>Optional</sup> <a name="Abfss" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.abfss"></a>

```go
Abfss DataDatabricksClusterClusterInfoInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#abfss DataDatabricksCluster#abfss}

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.dbfs"></a>

```go
Dbfs DataDatabricksClusterClusterInfoInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#dbfs DataDatabricksCluster#dbfs}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.file"></a>

```go
File DataDatabricksClusterClusterInfoInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#file DataDatabricksCluster#file}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.gcs"></a>

```go
Gcs DataDatabricksClusterClusterInfoInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#gcs DataDatabricksCluster#gcs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.s3"></a>

```go
S3 DataDatabricksClusterClusterInfoInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#s3 DataDatabricksCluster#s3}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.volumes"></a>

```go
Volumes DataDatabricksClusterClusterInfoInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#volumes DataDatabricksCluster#volumes}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.workspace"></a>

```go
Workspace DataDatabricksClusterClusterInfoInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#workspace DataDatabricksCluster#workspace}

---

### DataDatabricksClusterClusterInfoInitScriptsAbfss <a name="DataDatabricksClusterClusterInfoInitScriptsAbfss" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoInitScriptsAbfss {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoInitScriptsDbfs <a name="DataDatabricksClusterClusterInfoInitScriptsDbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoInitScriptsDbfs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoInitScriptsFile <a name="DataDatabricksClusterClusterInfoInitScriptsFile" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoInitScriptsFile {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoInitScriptsGcs <a name="DataDatabricksClusterClusterInfoInitScriptsGcs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoInitScriptsGcs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoInitScriptsS3 <a name="DataDatabricksClusterClusterInfoInitScriptsS3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoInitScriptsS3 {
	Destination: *string,
	CannedAcl: *string,
	EnableEncryption: interface{},
	EncryptionType: *string,
	Endpoint: *string,
	KmsKey: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#region DataDatabricksCluster#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.cannedAcl"></a>

```go
CannedAcl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.enableEncryption"></a>

```go
EnableEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#region DataDatabricksCluster#region}.

---

### DataDatabricksClusterClusterInfoInitScriptsVolumes <a name="DataDatabricksClusterClusterInfoInitScriptsVolumes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoInitScriptsVolumes {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoInitScriptsWorkspace <a name="DataDatabricksClusterClusterInfoInitScriptsWorkspace" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoTerminationReason <a name="DataDatabricksClusterClusterInfoTerminationReason" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterClusterInfoTerminationReason {
	Code: *string,
	Parameters: *map[string]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.code">Code</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#code DataDatabricksCluster#code}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#parameters DataDatabricksCluster#parameters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#type DataDatabricksCluster#type}. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.code"></a>

```go
Code *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#code DataDatabricksCluster#code}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#parameters DataDatabricksCluster#parameters}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#type DataDatabricksCluster#type}.

---

### DataDatabricksClusterConfig <a name="DataDatabricksClusterConfig" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

&datadatabrickscluster.DataDatabricksClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	ClusterInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo,
	ClusterName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterInfo">ClusterInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a></code> | cluster_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#id DataDatabricksCluster#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}.

---

##### `ClusterInfo`<sup>Optional</sup> <a name="ClusterInfo" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterInfo"></a>

```go
ClusterInfo DataDatabricksClusterClusterInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a>

cluster_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_info DataDatabricksCluster#cluster_info}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.0/docs/data-sources/cluster#id DataDatabricksCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksClusterClusterInfoAutoscaleOutputReference <a name="DataDatabricksClusterClusterInfoAutoscaleOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoAutoscaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoAutoscaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resetMinWorkers">ResetMinWorkers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetMinWorkers` <a name="ResetMinWorkers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resetMinWorkers"></a>

```go
func ResetMinWorkers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.minWorkersInput">MinWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.minWorkers">MinWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `MinWorkersInput`<sup>Optional</sup> <a name="MinWorkersInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.minWorkersInput"></a>

```go
func MinWorkersInput() *f64
```

- *Type:* *f64

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `MinWorkers`<sup>Required</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.minWorkers"></a>

```go
func MinWorkers() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a>

---


### DataDatabricksClusterClusterInfoAwsAttributesOutputReference <a name="DataDatabricksClusterClusterInfoAwsAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoAwsAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoAwsAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeCount">ResetEbsVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeSize">ResetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeType">ResetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetSpotBidPricePercent">ResetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetEbsVolumeCount` <a name="ResetEbsVolumeCount" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```go
func ResetEbsVolumeCount()
```

##### `ResetEbsVolumeSize` <a name="ResetEbsVolumeSize" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```go
func ResetEbsVolumeSize()
```

##### `ResetEbsVolumeType` <a name="ResetEbsVolumeType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeType"></a>

```go
func ResetEbsVolumeType()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetFirstOnDemand"></a>

```go
func ResetFirstOnDemand()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```go
func ResetInstanceProfileArn()
```

##### `ResetSpotBidPricePercent` <a name="ResetSpotBidPricePercent" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```go
func ResetSpotBidPricePercent()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeCountInput">EbsVolumeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeSizeInput">EbsVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeTypeInput">EbsVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.spotBidPricePercentInput">SpotBidPricePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `EbsVolumeCountInput`<sup>Optional</sup> <a name="EbsVolumeCountInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```go
func EbsVolumeCountInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeSizeInput`<sup>Optional</sup> <a name="EbsVolumeSizeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```go
func EbsVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeTypeInput`<sup>Optional</sup> <a name="EbsVolumeTypeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```go
func EbsVolumeTypeInput() *string
```

- *Type:* *string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```go
func FirstOnDemandInput() *f64
```

- *Type:* *f64

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```go
func InstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `SpotBidPricePercentInput`<sup>Optional</sup> <a name="SpotBidPricePercentInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```go
func SpotBidPricePercentInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `EbsVolumeCount`<sup>Required</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```go
func EbsVolumeCount() *f64
```

- *Type:* *f64

---

##### `EbsVolumeSize`<sup>Required</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```go
func EbsVolumeSize() *f64
```

- *Type:* *f64

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeType"></a>

```go
func EbsVolumeType() *string
```

- *Type:* *string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.firstOnDemand"></a>

```go
func FirstOnDemand() *f64
```

- *Type:* *f64

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `SpotBidPricePercent`<sup>Required</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```go
func SpotBidPricePercent() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a>

---


### DataDatabricksClusterClusterInfoAzureAttributesOutputReference <a name="DataDatabricksClusterClusterInfoAzureAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoAzureAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoAzureAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetSpotBidMaxPrice">ResetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetFirstOnDemand"></a>

```go
func ResetFirstOnDemand()
```

##### `ResetSpotBidMaxPrice` <a name="ResetSpotBidMaxPrice" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```go
func ResetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.spotBidMaxPriceInput">SpotBidMaxPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```go
func FirstOnDemandInput() *f64
```

- *Type:* *f64

---

##### `SpotBidMaxPriceInput`<sup>Optional</sup> <a name="SpotBidMaxPriceInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```go
func SpotBidMaxPriceInput() *f64
```

- *Type:* *f64

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.firstOnDemand"></a>

```go
func FirstOnDemand() *f64
```

- *Type:* *f64

---

##### `SpotBidMaxPrice`<sup>Required</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```go
func SpotBidMaxPrice() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a>

---


### DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference <a name="DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a>

---


### DataDatabricksClusterClusterInfoClusterLogConfOutputReference <a name="DataDatabricksClusterClusterInfoClusterLogConfOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoClusterLogConfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoClusterLogConfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putDbfs"></a>

```go
func PutDbfs(value DataDatabricksClusterClusterInfoClusterLogConfDbfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3"></a>

```go
func PutS3(value DataDatabricksClusterClusterInfoClusterLogConfS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a>

---

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resetDbfs"></a>

```go
func ResetDbfs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference">DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference">DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.dbfs"></a>

```go
func Dbfs() DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference">DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.s3"></a>

```go
func S3() DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference">DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.dbfsInput"></a>

```go
func DbfsInput() DataDatabricksClusterClusterInfoClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.s3Input"></a>

```go
func S3Input() DataDatabricksClusterClusterInfoClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a>

---


### DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference <a name="DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoClusterLogConfS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetCannedAcl"></a>

```go
func ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```go
func ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```go
func CannedAclInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```go
func EnableEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.cannedAcl"></a>

```go
func CannedAcl() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.enableEncryption"></a>

```go
func EnableEncryption() interface{}
```

- *Type:* interface{}

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a>

---


### DataDatabricksClusterClusterInfoClusterLogStatusOutputReference <a name="DataDatabricksClusterClusterInfoClusterLogStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoClusterLogStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoClusterLogStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resetLastAttempted">ResetLastAttempted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resetLastException">ResetLastException</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLastAttempted` <a name="ResetLastAttempted" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resetLastAttempted"></a>

```go
func ResetLastAttempted()
```

##### `ResetLastException` <a name="ResetLastException" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resetLastException"></a>

```go
func ResetLastException()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastAttemptedInput">LastAttemptedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastExceptionInput">LastExceptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastAttempted">LastAttempted</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastException">LastException</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastAttemptedInput`<sup>Optional</sup> <a name="LastAttemptedInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastAttemptedInput"></a>

```go
func LastAttemptedInput() *f64
```

- *Type:* *f64

---

##### `LastExceptionInput`<sup>Optional</sup> <a name="LastExceptionInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastExceptionInput"></a>

```go
func LastExceptionInput() *string
```

- *Type:* *string

---

##### `LastAttempted`<sup>Required</sup> <a name="LastAttempted" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastAttempted"></a>

```go
func LastAttempted() *f64
```

- *Type:* *f64

---

##### `LastException`<sup>Required</sup> <a name="LastException" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastException"></a>

```go
func LastException() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoClusterLogStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a>

---


### DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference <a name="DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a>

---


### DataDatabricksClusterClusterInfoDockerImageOutputReference <a name="DataDatabricksClusterClusterInfoDockerImageOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoDockerImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoDockerImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.putBasicAuth">PutBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.resetBasicAuth">ResetBasicAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuth` <a name="PutBasicAuth" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.putBasicAuth"></a>

```go
func PutBasicAuth(value DataDatabricksClusterClusterInfoDockerImageBasicAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a>

---

##### `ResetBasicAuth` <a name="ResetBasicAuth" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.resetBasicAuth"></a>

```go
func ResetBasicAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference">DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.basicAuthInput">BasicAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BasicAuth`<sup>Required</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.basicAuth"></a>

```go
func BasicAuth() DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference">DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference</a>

---

##### `BasicAuthInput`<sup>Optional</sup> <a name="BasicAuthInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.basicAuthInput"></a>

```go
func BasicAuthInput() DataDatabricksClusterClusterInfoDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a>

---


### DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference <a name="DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.resetIsSpot">ResetIsSpot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsSpot` <a name="ResetIsSpot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.resetIsSpot"></a>

```go
func ResetIsSpot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.isSpotInput">IsSpotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.isSpot">IsSpot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsSpotInput`<sup>Optional</sup> <a name="IsSpotInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.isSpotInput"></a>

```go
func IsSpotInput() interface{}
```

- *Type:* interface{}

---

##### `IsSpot`<sup>Required</sup> <a name="IsSpot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.isSpot"></a>

```go
func IsSpot() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoDriverNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a>

---


### DataDatabricksClusterClusterInfoDriverOutputReference <a name="DataDatabricksClusterClusterInfoDriverOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoDriverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoDriverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.putNodeAwsAttributes">PutNodeAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetHostPrivateIp">ResetHostPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetNodeAwsAttributes">ResetNodeAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetNodeId">ResetNodeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetPublicDns">ResetPublicDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetStartTimestamp">ResetStartTimestamp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeAwsAttributes` <a name="PutNodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.putNodeAwsAttributes"></a>

```go
func PutNodeAwsAttributes(value DataDatabricksClusterClusterInfoDriverNodeAwsAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.putNodeAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a>

---

##### `ResetHostPrivateIp` <a name="ResetHostPrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetHostPrivateIp"></a>

```go
func ResetHostPrivateIp()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetNodeAwsAttributes` <a name="ResetNodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetNodeAwsAttributes"></a>

```go
func ResetNodeAwsAttributes()
```

##### `ResetNodeId` <a name="ResetNodeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetNodeId"></a>

```go
func ResetNodeId()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetPublicDns` <a name="ResetPublicDns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetPublicDns"></a>

```go
func ResetPublicDns()
```

##### `ResetStartTimestamp` <a name="ResetStartTimestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetStartTimestamp"></a>

```go
func ResetStartTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeAwsAttributes">NodeAwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference">DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.hostPrivateIpInput">HostPrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeAwsAttributesInput">NodeAwsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeIdInput">NodeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.publicDnsInput">PublicDnsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.startTimestampInput">StartTimestampInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.hostPrivateIp">HostPrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.publicDns">PublicDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.startTimestamp">StartTimestamp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeAwsAttributes`<sup>Required</sup> <a name="NodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeAwsAttributes"></a>

```go
func NodeAwsAttributes() DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference">DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference</a>

---

##### `HostPrivateIpInput`<sup>Optional</sup> <a name="HostPrivateIpInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.hostPrivateIpInput"></a>

```go
func HostPrivateIpInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `NodeAwsAttributesInput`<sup>Optional</sup> <a name="NodeAwsAttributesInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeAwsAttributesInput"></a>

```go
func NodeAwsAttributesInput() DataDatabricksClusterClusterInfoDriverNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a>

---

##### `NodeIdInput`<sup>Optional</sup> <a name="NodeIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeIdInput"></a>

```go
func NodeIdInput() *string
```

- *Type:* *string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `PublicDnsInput`<sup>Optional</sup> <a name="PublicDnsInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.publicDnsInput"></a>

```go
func PublicDnsInput() *string
```

- *Type:* *string

---

##### `StartTimestampInput`<sup>Optional</sup> <a name="StartTimestampInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.startTimestampInput"></a>

```go
func StartTimestampInput() *f64
```

- *Type:* *f64

---

##### `HostPrivateIp`<sup>Required</sup> <a name="HostPrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.hostPrivateIp"></a>

```go
func HostPrivateIp() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PublicDns`<sup>Required</sup> <a name="PublicDns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.publicDns"></a>

```go
func PublicDns() *string
```

- *Type:* *string

---

##### `StartTimestamp`<sup>Required</sup> <a name="StartTimestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.startTimestamp"></a>

```go
func StartTimestamp() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoDriver
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a>

---


### DataDatabricksClusterClusterInfoExecutorsList <a name="DataDatabricksClusterClusterInfoExecutorsList" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoExecutorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksClusterClusterInfoExecutorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.get"></a>

```go
func Get(index *f64) DataDatabricksClusterClusterInfoExecutorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference <a name="DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.resetIsSpot">ResetIsSpot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsSpot` <a name="ResetIsSpot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.resetIsSpot"></a>

```go
func ResetIsSpot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.isSpotInput">IsSpotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.isSpot">IsSpot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsSpotInput`<sup>Optional</sup> <a name="IsSpotInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.isSpotInput"></a>

```go
func IsSpotInput() interface{}
```

- *Type:* interface{}

---

##### `IsSpot`<sup>Required</sup> <a name="IsSpot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.isSpot"></a>

```go
func IsSpot() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a>

---


### DataDatabricksClusterClusterInfoExecutorsOutputReference <a name="DataDatabricksClusterClusterInfoExecutorsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoExecutorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksClusterClusterInfoExecutorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.putNodeAwsAttributes">PutNodeAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetHostPrivateIp">ResetHostPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetNodeAwsAttributes">ResetNodeAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetNodeId">ResetNodeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetPublicDns">ResetPublicDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetStartTimestamp">ResetStartTimestamp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeAwsAttributes` <a name="PutNodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.putNodeAwsAttributes"></a>

```go
func PutNodeAwsAttributes(value DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.putNodeAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a>

---

##### `ResetHostPrivateIp` <a name="ResetHostPrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetHostPrivateIp"></a>

```go
func ResetHostPrivateIp()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetNodeAwsAttributes` <a name="ResetNodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetNodeAwsAttributes"></a>

```go
func ResetNodeAwsAttributes()
```

##### `ResetNodeId` <a name="ResetNodeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetNodeId"></a>

```go
func ResetNodeId()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetPublicDns` <a name="ResetPublicDns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetPublicDns"></a>

```go
func ResetPublicDns()
```

##### `ResetStartTimestamp` <a name="ResetStartTimestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetStartTimestamp"></a>

```go
func ResetStartTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeAwsAttributes">NodeAwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.hostPrivateIpInput">HostPrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeAwsAttributesInput">NodeAwsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeIdInput">NodeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.publicDnsInput">PublicDnsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.startTimestampInput">StartTimestampInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.hostPrivateIp">HostPrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.publicDns">PublicDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.startTimestamp">StartTimestamp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeAwsAttributes`<sup>Required</sup> <a name="NodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeAwsAttributes"></a>

```go
func NodeAwsAttributes() DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference</a>

---

##### `HostPrivateIpInput`<sup>Optional</sup> <a name="HostPrivateIpInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.hostPrivateIpInput"></a>

```go
func HostPrivateIpInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `NodeAwsAttributesInput`<sup>Optional</sup> <a name="NodeAwsAttributesInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeAwsAttributesInput"></a>

```go
func NodeAwsAttributesInput() DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a>

---

##### `NodeIdInput`<sup>Optional</sup> <a name="NodeIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeIdInput"></a>

```go
func NodeIdInput() *string
```

- *Type:* *string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `PublicDnsInput`<sup>Optional</sup> <a name="PublicDnsInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.publicDnsInput"></a>

```go
func PublicDnsInput() *string
```

- *Type:* *string

---

##### `StartTimestampInput`<sup>Optional</sup> <a name="StartTimestampInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.startTimestampInput"></a>

```go
func StartTimestampInput() *f64
```

- *Type:* *f64

---

##### `HostPrivateIp`<sup>Required</sup> <a name="HostPrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.hostPrivateIp"></a>

```go
func HostPrivateIp() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PublicDns`<sup>Required</sup> <a name="PublicDns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.publicDns"></a>

```go
func PublicDns() *string
```

- *Type:* *string

---

##### `StartTimestamp`<sup>Required</sup> <a name="StartTimestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.startTimestamp"></a>

```go
func StartTimestamp() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksClusterClusterInfoGcpAttributesOutputReference <a name="DataDatabricksClusterClusterInfoGcpAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoGcpAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoGcpAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetBootDiskSize">ResetBootDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetGoogleServiceAccount">ResetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetLocalSsdCount">ResetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetUsePreemptibleExecutors">ResetUsePreemptibleExecutors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetBootDiskSize` <a name="ResetBootDiskSize" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetBootDiskSize"></a>

```go
func ResetBootDiskSize()
```

##### `ResetGoogleServiceAccount` <a name="ResetGoogleServiceAccount" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```go
func ResetGoogleServiceAccount()
```

##### `ResetLocalSsdCount` <a name="ResetLocalSsdCount" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetLocalSsdCount"></a>

```go
func ResetLocalSsdCount()
```

##### `ResetUsePreemptibleExecutors` <a name="ResetUsePreemptibleExecutors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetUsePreemptibleExecutors"></a>

```go
func ResetUsePreemptibleExecutors()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.bootDiskSizeInput">BootDiskSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.googleServiceAccountInput">GoogleServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.usePreemptibleExecutorsInput">UsePreemptibleExecutorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.bootDiskSize">BootDiskSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.usePreemptibleExecutors">UsePreemptibleExecutors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `BootDiskSizeInput`<sup>Optional</sup> <a name="BootDiskSizeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.bootDiskSizeInput"></a>

```go
func BootDiskSizeInput() *f64
```

- *Type:* *f64

---

##### `GoogleServiceAccountInput`<sup>Optional</sup> <a name="GoogleServiceAccountInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```go
func GoogleServiceAccountInput() *string
```

- *Type:* *string

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.localSsdCountInput"></a>

```go
func LocalSsdCountInput() *f64
```

- *Type:* *f64

---

##### `UsePreemptibleExecutorsInput`<sup>Optional</sup> <a name="UsePreemptibleExecutorsInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.usePreemptibleExecutorsInput"></a>

```go
func UsePreemptibleExecutorsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `BootDiskSize`<sup>Required</sup> <a name="BootDiskSize" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.bootDiskSize"></a>

```go
func BootDiskSize() *f64
```

- *Type:* *f64

---

##### `GoogleServiceAccount`<sup>Required</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.googleServiceAccount"></a>

```go
func GoogleServiceAccount() *string
```

- *Type:* *string

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.localSsdCount"></a>

```go
func LocalSsdCount() *f64
```

- *Type:* *f64

---

##### `UsePreemptibleExecutors`<sup>Required</sup> <a name="UsePreemptibleExecutors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.usePreemptibleExecutors"></a>

```go
func UsePreemptibleExecutors() interface{}
```

- *Type:* interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a>

---


### DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a>

---


### DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a>

---


### DataDatabricksClusterClusterInfoInitScriptsFileOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsFileOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoInitScriptsFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoInitScriptsFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a>

---


### DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoInitScriptsGcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a>

---


### DataDatabricksClusterClusterInfoInitScriptsList <a name="DataDatabricksClusterClusterInfoInitScriptsList" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoInitScriptsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksClusterClusterInfoInitScriptsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.get"></a>

```go
func Get(index *f64) DataDatabricksClusterClusterInfoInitScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksClusterClusterInfoInitScriptsOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoInitScriptsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksClusterClusterInfoInitScriptsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putAbfss">PutAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putWorkspace">PutWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetAbfss">ResetAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbfss` <a name="PutAbfss" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putAbfss"></a>

```go
func PutAbfss(value DataDatabricksClusterClusterInfoInitScriptsAbfss)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putAbfss.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a>

---

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putDbfs"></a>

```go
func PutDbfs(value DataDatabricksClusterClusterInfoInitScriptsDbfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a>

---

##### `PutFile` <a name="PutFile" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putFile"></a>

```go
func PutFile(value DataDatabricksClusterClusterInfoInitScriptsFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a>

---

##### `PutGcs` <a name="PutGcs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putGcs"></a>

```go
func PutGcs(value DataDatabricksClusterClusterInfoInitScriptsGcs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3"></a>

```go
func PutS3(value DataDatabricksClusterClusterInfoInitScriptsS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putVolumes"></a>

```go
func PutVolumes(value DataDatabricksClusterClusterInfoInitScriptsVolumes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a>

---

##### `PutWorkspace` <a name="PutWorkspace" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putWorkspace"></a>

```go
func PutWorkspace(value DataDatabricksClusterClusterInfoInitScriptsWorkspace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a>

---

##### `ResetAbfss` <a name="ResetAbfss" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetAbfss"></a>

```go
func ResetAbfss()
```

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetDbfs"></a>

```go
func ResetDbfs()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetFile"></a>

```go
func ResetFile()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetGcs"></a>

```go
func ResetGcs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetS3"></a>

```go
func ResetS3()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetWorkspace"></a>

```go
func ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference">DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference">DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference">DataDatabricksClusterClusterInfoInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference">DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference">DataDatabricksClusterClusterInfoInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference">DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference">DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.abfssInput">AbfssInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.volumesInput">VolumesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Abfss`<sup>Required</sup> <a name="Abfss" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.abfss"></a>

```go
func Abfss() DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference">DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference</a>

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.dbfs"></a>

```go
func Dbfs() DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference">DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference</a>

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.file"></a>

```go
func File() DataDatabricksClusterClusterInfoInitScriptsFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference">DataDatabricksClusterClusterInfoInitScriptsFileOutputReference</a>

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.gcs"></a>

```go
func Gcs() DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference">DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.s3"></a>

```go
func S3() DataDatabricksClusterClusterInfoInitScriptsS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference">DataDatabricksClusterClusterInfoInitScriptsS3OutputReference</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.volumes"></a>

```go
func Volumes() DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference">DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference</a>

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.workspace"></a>

```go
func Workspace() DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference">DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference</a>

---

##### `AbfssInput`<sup>Optional</sup> <a name="AbfssInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.abfssInput"></a>

```go
func AbfssInput() DataDatabricksClusterClusterInfoInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.dbfsInput"></a>

```go
func DbfsInput() DataDatabricksClusterClusterInfoInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.fileInput"></a>

```go
func FileInput() DataDatabricksClusterClusterInfoInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a>

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.gcsInput"></a>

```go
func GcsInput() DataDatabricksClusterClusterInfoInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.s3Input"></a>

```go
func S3Input() DataDatabricksClusterClusterInfoInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a>

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.volumesInput"></a>

```go
func VolumesInput() DataDatabricksClusterClusterInfoInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a>

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.workspaceInput"></a>

```go
func WorkspaceInput() DataDatabricksClusterClusterInfoInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksClusterClusterInfoInitScriptsS3OutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsS3OutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoInitScriptsS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoInitScriptsS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetCannedAcl"></a>

```go
func ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEnableEncryption"></a>

```go
func ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.cannedAclInput"></a>

```go
func CannedAclInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```go
func EnableEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.cannedAcl"></a>

```go
func CannedAcl() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.enableEncryption"></a>

```go
func EnableEncryption() interface{}
```

- *Type:* interface{}

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a>

---


### DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a>

---


### DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a>

---


### DataDatabricksClusterClusterInfoOutputReference <a name="DataDatabricksClusterClusterInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes">PutAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAzureAttributes">PutAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogConf">PutClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogStatus">PutClusterLogStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDockerImage">PutDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver">PutDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putExecutors">PutExecutors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putGcpAttributes">PutGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putInitScripts">PutInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putTerminationReason">PutTerminationReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAutoterminationMinutes">ResetAutoterminationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAwsAttributes">ResetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAzureAttributes">ResetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterCores">ResetClusterCores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterLogConf">ResetClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterLogStatus">ResetClusterLogStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterMemoryMb">ResetClusterMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetCreatorUserName">ResetCreatorUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDataSecurityMode">ResetDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDockerImage">ResetDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriver">ResetDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriverInstancePoolId">ResetDriverInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriverNodeTypeId">ResetDriverNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetEnableElasticDisk">ResetEnableElasticDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetEnableLocalDiskEncryption">ResetEnableLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetExecutors">ResetExecutors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetGcpAttributes">ResetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetInitScripts">ResetInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetInstancePoolId">ResetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetJdbcPort">ResetJdbcPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetLastActivityTime">ResetLastActivityTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetLastStateLossTime">ResetLastStateLossTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetNodeTypeId">ResetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetRuntimeEngine">ResetRuntimeEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSingleUserName">ResetSingleUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkConf">ResetSparkConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkContextId">ResetSparkContextId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkEnvVars">ResetSparkEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetStateMessage">ResetStateMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetTerminateTime">ResetTerminateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetTerminationReason">ResetTerminationReason</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAutoscale"></a>

```go
func PutAutoscale(value DataDatabricksClusterClusterInfoAutoscale)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a>

---

##### `PutAwsAttributes` <a name="PutAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes"></a>

```go
func PutAwsAttributes(value DataDatabricksClusterClusterInfoAwsAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a>

---

##### `PutAzureAttributes` <a name="PutAzureAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAzureAttributes"></a>

```go
func PutAzureAttributes(value DataDatabricksClusterClusterInfoAzureAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a>

---

##### `PutClusterLogConf` <a name="PutClusterLogConf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogConf"></a>

```go
func PutClusterLogConf(value DataDatabricksClusterClusterInfoClusterLogConf)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogConf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a>

---

##### `PutClusterLogStatus` <a name="PutClusterLogStatus" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogStatus"></a>

```go
func PutClusterLogStatus(value DataDatabricksClusterClusterInfoClusterLogStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a>

---

##### `PutDockerImage` <a name="PutDockerImage" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDockerImage"></a>

```go
func PutDockerImage(value DataDatabricksClusterClusterInfoDockerImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDockerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a>

---

##### `PutDriver` <a name="PutDriver" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver"></a>

```go
func PutDriver(value DataDatabricksClusterClusterInfoDriver)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a>

---

##### `PutExecutors` <a name="PutExecutors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putExecutors"></a>

```go
func PutExecutors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putExecutors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGcpAttributes` <a name="PutGcpAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putGcpAttributes"></a>

```go
func PutGcpAttributes(value DataDatabricksClusterClusterInfoGcpAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a>

---

##### `PutInitScripts` <a name="PutInitScripts" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putInitScripts"></a>

```go
func PutInitScripts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putInitScripts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTerminationReason` <a name="PutTerminationReason" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putTerminationReason"></a>

```go
func PutTerminationReason(value DataDatabricksClusterClusterInfoTerminationReason)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putTerminationReason.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a>

---

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAutoscale"></a>

```go
func ResetAutoscale()
```

##### `ResetAutoterminationMinutes` <a name="ResetAutoterminationMinutes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAutoterminationMinutes"></a>

```go
func ResetAutoterminationMinutes()
```

##### `ResetAwsAttributes` <a name="ResetAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAwsAttributes"></a>

```go
func ResetAwsAttributes()
```

##### `ResetAzureAttributes` <a name="ResetAzureAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAzureAttributes"></a>

```go
func ResetAzureAttributes()
```

##### `ResetClusterCores` <a name="ResetClusterCores" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterCores"></a>

```go
func ResetClusterCores()
```

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetClusterLogConf` <a name="ResetClusterLogConf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterLogConf"></a>

```go
func ResetClusterLogConf()
```

##### `ResetClusterLogStatus` <a name="ResetClusterLogStatus" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterLogStatus"></a>

```go
func ResetClusterLogStatus()
```

##### `ResetClusterMemoryMb` <a name="ResetClusterMemoryMb" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterMemoryMb"></a>

```go
func ResetClusterMemoryMb()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetCreatorUserName` <a name="ResetCreatorUserName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetCreatorUserName"></a>

```go
func ResetCreatorUserName()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetCustomTags"></a>

```go
func ResetCustomTags()
```

##### `ResetDataSecurityMode` <a name="ResetDataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDataSecurityMode"></a>

```go
func ResetDataSecurityMode()
```

##### `ResetDockerImage` <a name="ResetDockerImage" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDockerImage"></a>

```go
func ResetDockerImage()
```

##### `ResetDriver` <a name="ResetDriver" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriver"></a>

```go
func ResetDriver()
```

##### `ResetDriverInstancePoolId` <a name="ResetDriverInstancePoolId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriverInstancePoolId"></a>

```go
func ResetDriverInstancePoolId()
```

##### `ResetDriverNodeTypeId` <a name="ResetDriverNodeTypeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriverNodeTypeId"></a>

```go
func ResetDriverNodeTypeId()
```

##### `ResetEnableElasticDisk` <a name="ResetEnableElasticDisk" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetEnableElasticDisk"></a>

```go
func ResetEnableElasticDisk()
```

##### `ResetEnableLocalDiskEncryption` <a name="ResetEnableLocalDiskEncryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetEnableLocalDiskEncryption"></a>

```go
func ResetEnableLocalDiskEncryption()
```

##### `ResetExecutors` <a name="ResetExecutors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetExecutors"></a>

```go
func ResetExecutors()
```

##### `ResetGcpAttributes` <a name="ResetGcpAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetGcpAttributes"></a>

```go
func ResetGcpAttributes()
```

##### `ResetInitScripts` <a name="ResetInitScripts" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetInitScripts"></a>

```go
func ResetInitScripts()
```

##### `ResetInstancePoolId` <a name="ResetInstancePoolId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetInstancePoolId"></a>

```go
func ResetInstancePoolId()
```

##### `ResetJdbcPort` <a name="ResetJdbcPort" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetJdbcPort"></a>

```go
func ResetJdbcPort()
```

##### `ResetLastActivityTime` <a name="ResetLastActivityTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetLastActivityTime"></a>

```go
func ResetLastActivityTime()
```

##### `ResetLastStateLossTime` <a name="ResetLastStateLossTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetLastStateLossTime"></a>

```go
func ResetLastStateLossTime()
```

##### `ResetNodeTypeId` <a name="ResetNodeTypeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetNodeTypeId"></a>

```go
func ResetNodeTypeId()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetNumWorkers"></a>

```go
func ResetNumWorkers()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetRuntimeEngine` <a name="ResetRuntimeEngine" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetRuntimeEngine"></a>

```go
func ResetRuntimeEngine()
```

##### `ResetSingleUserName` <a name="ResetSingleUserName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSingleUserName"></a>

```go
func ResetSingleUserName()
```

##### `ResetSparkConf` <a name="ResetSparkConf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkConf"></a>

```go
func ResetSparkConf()
```

##### `ResetSparkContextId` <a name="ResetSparkContextId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkContextId"></a>

```go
func ResetSparkContextId()
```

##### `ResetSparkEnvVars` <a name="ResetSparkEnvVars" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkEnvVars"></a>

```go
func ResetSparkEnvVars()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSshPublicKeys"></a>

```go
func ResetSshPublicKeys()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetStateMessage` <a name="ResetStateMessage" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetStateMessage"></a>

```go
func ResetStateMessage()
```

##### `ResetTerminateTime` <a name="ResetTerminateTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetTerminateTime"></a>

```go
func ResetTerminateTime()
```

##### `ResetTerminationReason` <a name="ResetTerminationReason" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetTerminationReason"></a>

```go
func ResetTerminationReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference">DataDatabricksClusterClusterInfoAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference">DataDatabricksClusterClusterInfoAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference">DataDatabricksClusterClusterInfoAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference">DataDatabricksClusterClusterInfoClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogStatus">ClusterLogStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference">DataDatabricksClusterClusterInfoClusterLogStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterSource">ClusterSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dockerImage">DockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference">DataDatabricksClusterClusterInfoDockerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driver">Driver</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference">DataDatabricksClusterClusterInfoDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.executors">Executors</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList">DataDatabricksClusterClusterInfoExecutorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference">DataDatabricksClusterClusterInfoGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.initScripts">InitScripts</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList">DataDatabricksClusterClusterInfoInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminationReason">TerminationReason</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference">DataDatabricksClusterClusterInfoTerminationReasonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoscaleInput">AutoscaleInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoterminationMinutesInput">AutoterminationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.awsAttributesInput">AwsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.azureAttributesInput">AzureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterCoresInput">ClusterCoresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogConfInput">ClusterLogConfInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogStatusInput">ClusterLogStatusInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterMemoryMbInput">ClusterMemoryMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creatorUserNameInput">CreatorUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dataSecurityModeInput">DataSecurityModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.defaultTagsInput">DefaultTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dockerImageInput">DockerImageInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInput">DriverInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInstancePoolIdInput">DriverInstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverNodeTypeIdInput">DriverNodeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableElasticDiskInput">EnableElasticDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableLocalDiskEncryptionInput">EnableLocalDiskEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.executorsInput">ExecutorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.gcpAttributesInput">GcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.initScriptsInput">InitScriptsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.jdbcPortInput">JdbcPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastActivityTimeInput">LastActivityTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastStateLossTimeInput">LastStateLossTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.nodeTypeIdInput">NodeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.numWorkersInput">NumWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.runtimeEngineInput">RuntimeEngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.singleUserNameInput">SingleUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkConfInput">SparkConfInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkContextIdInput">SparkContextIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkEnvVarsInput">SparkEnvVarsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkVersionInput">SparkVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateMessageInput">StateMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminateTimeInput">TerminateTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminationReasonInput">TerminationReasonInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoterminationMinutes">AutoterminationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterCores">ClusterCores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterMemoryMb">ClusterMemoryMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creatorUserName">CreatorUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dataSecurityMode">DataSecurityMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.defaultTags">DefaultTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.jdbcPort">JdbcPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastActivityTime">LastActivityTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastStateLossTime">LastStateLossTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.runtimeEngine">RuntimeEngine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.singleUserName">SingleUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkConf">SparkConf</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkContextId">SparkContextId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkEnvVars">SparkEnvVars</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkVersion">SparkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminateTime">TerminateTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoscale"></a>

```go
func Autoscale() DataDatabricksClusterClusterInfoAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference">DataDatabricksClusterClusterInfoAutoscaleOutputReference</a>

---

##### `AwsAttributes`<sup>Required</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.awsAttributes"></a>

```go
func AwsAttributes() DataDatabricksClusterClusterInfoAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference">DataDatabricksClusterClusterInfoAwsAttributesOutputReference</a>

---

##### `AzureAttributes`<sup>Required</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.azureAttributes"></a>

```go
func AzureAttributes() DataDatabricksClusterClusterInfoAzureAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference">DataDatabricksClusterClusterInfoAzureAttributesOutputReference</a>

---

##### `ClusterLogConf`<sup>Required</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogConf"></a>

```go
func ClusterLogConf() DataDatabricksClusterClusterInfoClusterLogConfOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference">DataDatabricksClusterClusterInfoClusterLogConfOutputReference</a>

---

##### `ClusterLogStatus`<sup>Required</sup> <a name="ClusterLogStatus" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogStatus"></a>

```go
func ClusterLogStatus() DataDatabricksClusterClusterInfoClusterLogStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference">DataDatabricksClusterClusterInfoClusterLogStatusOutputReference</a>

---

##### `ClusterSource`<sup>Required</sup> <a name="ClusterSource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterSource"></a>

```go
func ClusterSource() *string
```

- *Type:* *string

---

##### `DockerImage`<sup>Required</sup> <a name="DockerImage" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dockerImage"></a>

```go
func DockerImage() DataDatabricksClusterClusterInfoDockerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference">DataDatabricksClusterClusterInfoDockerImageOutputReference</a>

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driver"></a>

```go
func Driver() DataDatabricksClusterClusterInfoDriverOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference">DataDatabricksClusterClusterInfoDriverOutputReference</a>

---

##### `Executors`<sup>Required</sup> <a name="Executors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.executors"></a>

```go
func Executors() DataDatabricksClusterClusterInfoExecutorsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList">DataDatabricksClusterClusterInfoExecutorsList</a>

---

##### `GcpAttributes`<sup>Required</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.gcpAttributes"></a>

```go
func GcpAttributes() DataDatabricksClusterClusterInfoGcpAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference">DataDatabricksClusterClusterInfoGcpAttributesOutputReference</a>

---

##### `InitScripts`<sup>Required</sup> <a name="InitScripts" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.initScripts"></a>

```go
func InitScripts() DataDatabricksClusterClusterInfoInitScriptsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList">DataDatabricksClusterClusterInfoInitScriptsList</a>

---

##### `TerminationReason`<sup>Required</sup> <a name="TerminationReason" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminationReason"></a>

```go
func TerminationReason() DataDatabricksClusterClusterInfoTerminationReasonOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference">DataDatabricksClusterClusterInfoTerminationReasonOutputReference</a>

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoscaleInput"></a>

```go
func AutoscaleInput() DataDatabricksClusterClusterInfoAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a>

---

##### `AutoterminationMinutesInput`<sup>Optional</sup> <a name="AutoterminationMinutesInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoterminationMinutesInput"></a>

```go
func AutoterminationMinutesInput() *f64
```

- *Type:* *f64

---

##### `AwsAttributesInput`<sup>Optional</sup> <a name="AwsAttributesInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.awsAttributesInput"></a>

```go
func AwsAttributesInput() DataDatabricksClusterClusterInfoAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a>

---

##### `AzureAttributesInput`<sup>Optional</sup> <a name="AzureAttributesInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.azureAttributesInput"></a>

```go
func AzureAttributesInput() DataDatabricksClusterClusterInfoAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a>

---

##### `ClusterCoresInput`<sup>Optional</sup> <a name="ClusterCoresInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterCoresInput"></a>

```go
func ClusterCoresInput() *f64
```

- *Type:* *f64

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ClusterLogConfInput`<sup>Optional</sup> <a name="ClusterLogConfInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogConfInput"></a>

```go
func ClusterLogConfInput() DataDatabricksClusterClusterInfoClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a>

---

##### `ClusterLogStatusInput`<sup>Optional</sup> <a name="ClusterLogStatusInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogStatusInput"></a>

```go
func ClusterLogStatusInput() DataDatabricksClusterClusterInfoClusterLogStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a>

---

##### `ClusterMemoryMbInput`<sup>Optional</sup> <a name="ClusterMemoryMbInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterMemoryMbInput"></a>

```go
func ClusterMemoryMbInput() *f64
```

- *Type:* *f64

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `CreatorUserNameInput`<sup>Optional</sup> <a name="CreatorUserNameInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creatorUserNameInput"></a>

```go
func CreatorUserNameInput() *string
```

- *Type:* *string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.customTagsInput"></a>

```go
func CustomTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DataSecurityModeInput`<sup>Optional</sup> <a name="DataSecurityModeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dataSecurityModeInput"></a>

```go
func DataSecurityModeInput() *string
```

- *Type:* *string

---

##### `DefaultTagsInput`<sup>Optional</sup> <a name="DefaultTagsInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.defaultTagsInput"></a>

```go
func DefaultTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DockerImageInput`<sup>Optional</sup> <a name="DockerImageInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dockerImageInput"></a>

```go
func DockerImageInput() DataDatabricksClusterClusterInfoDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a>

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInput"></a>

```go
func DriverInput() DataDatabricksClusterClusterInfoDriver
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a>

---

##### `DriverInstancePoolIdInput`<sup>Optional</sup> <a name="DriverInstancePoolIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInstancePoolIdInput"></a>

```go
func DriverInstancePoolIdInput() *string
```

- *Type:* *string

---

##### `DriverNodeTypeIdInput`<sup>Optional</sup> <a name="DriverNodeTypeIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverNodeTypeIdInput"></a>

```go
func DriverNodeTypeIdInput() *string
```

- *Type:* *string

---

##### `EnableElasticDiskInput`<sup>Optional</sup> <a name="EnableElasticDiskInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableElasticDiskInput"></a>

```go
func EnableElasticDiskInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLocalDiskEncryptionInput`<sup>Optional</sup> <a name="EnableLocalDiskEncryptionInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableLocalDiskEncryptionInput"></a>

```go
func EnableLocalDiskEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutorsInput`<sup>Optional</sup> <a name="ExecutorsInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.executorsInput"></a>

```go
func ExecutorsInput() interface{}
```

- *Type:* interface{}

---

##### `GcpAttributesInput`<sup>Optional</sup> <a name="GcpAttributesInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.gcpAttributesInput"></a>

```go
func GcpAttributesInput() DataDatabricksClusterClusterInfoGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a>

---

##### `InitScriptsInput`<sup>Optional</sup> <a name="InitScriptsInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.initScriptsInput"></a>

```go
func InitScriptsInput() interface{}
```

- *Type:* interface{}

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.instancePoolIdInput"></a>

```go
func InstancePoolIdInput() *string
```

- *Type:* *string

---

##### `JdbcPortInput`<sup>Optional</sup> <a name="JdbcPortInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.jdbcPortInput"></a>

```go
func JdbcPortInput() *f64
```

- *Type:* *f64

---

##### `LastActivityTimeInput`<sup>Optional</sup> <a name="LastActivityTimeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastActivityTimeInput"></a>

```go
func LastActivityTimeInput() *f64
```

- *Type:* *f64

---

##### `LastStateLossTimeInput`<sup>Optional</sup> <a name="LastStateLossTimeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastStateLossTimeInput"></a>

```go
func LastStateLossTimeInput() *f64
```

- *Type:* *f64

---

##### `NodeTypeIdInput`<sup>Optional</sup> <a name="NodeTypeIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.nodeTypeIdInput"></a>

```go
func NodeTypeIdInput() *string
```

- *Type:* *string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.numWorkersInput"></a>

```go
func NumWorkersInput() *f64
```

- *Type:* *f64

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `RuntimeEngineInput`<sup>Optional</sup> <a name="RuntimeEngineInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.runtimeEngineInput"></a>

```go
func RuntimeEngineInput() *string
```

- *Type:* *string

---

##### `SingleUserNameInput`<sup>Optional</sup> <a name="SingleUserNameInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.singleUserNameInput"></a>

```go
func SingleUserNameInput() *string
```

- *Type:* *string

---

##### `SparkConfInput`<sup>Optional</sup> <a name="SparkConfInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkConfInput"></a>

```go
func SparkConfInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkContextIdInput`<sup>Optional</sup> <a name="SparkContextIdInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkContextIdInput"></a>

```go
func SparkContextIdInput() *f64
```

- *Type:* *f64

---

##### `SparkEnvVarsInput`<sup>Optional</sup> <a name="SparkEnvVarsInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkEnvVarsInput"></a>

```go
func SparkEnvVarsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkVersionInput`<sup>Optional</sup> <a name="SparkVersionInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkVersionInput"></a>

```go
func SparkVersionInput() *string
```

- *Type:* *string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *f64
```

- *Type:* *f64

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StateMessageInput`<sup>Optional</sup> <a name="StateMessageInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateMessageInput"></a>

```go
func StateMessageInput() *string
```

- *Type:* *string

---

##### `TerminateTimeInput`<sup>Optional</sup> <a name="TerminateTimeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminateTimeInput"></a>

```go
func TerminateTimeInput() *f64
```

- *Type:* *f64

---

##### `TerminationReasonInput`<sup>Optional</sup> <a name="TerminationReasonInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminationReasonInput"></a>

```go
func TerminationReasonInput() DataDatabricksClusterClusterInfoTerminationReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a>

---

##### `AutoterminationMinutes`<sup>Required</sup> <a name="AutoterminationMinutes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoterminationMinutes"></a>

```go
func AutoterminationMinutes() *f64
```

- *Type:* *f64

---

##### `ClusterCores`<sup>Required</sup> <a name="ClusterCores" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterCores"></a>

```go
func ClusterCores() *f64
```

- *Type:* *f64

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterMemoryMb`<sup>Required</sup> <a name="ClusterMemoryMb" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterMemoryMb"></a>

```go
func ClusterMemoryMb() *f64
```

- *Type:* *f64

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CreatorUserName`<sup>Required</sup> <a name="CreatorUserName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creatorUserName"></a>

```go
func CreatorUserName() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.customTags"></a>

```go
func CustomTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DataSecurityMode`<sup>Required</sup> <a name="DataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dataSecurityMode"></a>

```go
func DataSecurityMode() *string
```

- *Type:* *string

---

##### `DefaultTags`<sup>Required</sup> <a name="DefaultTags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.defaultTags"></a>

```go
func DefaultTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DriverInstancePoolId`<sup>Required</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInstancePoolId"></a>

```go
func DriverInstancePoolId() *string
```

- *Type:* *string

---

##### `DriverNodeTypeId`<sup>Required</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverNodeTypeId"></a>

```go
func DriverNodeTypeId() *string
```

- *Type:* *string

---

##### `EnableElasticDisk`<sup>Required</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableElasticDisk"></a>

```go
func EnableElasticDisk() interface{}
```

- *Type:* interface{}

---

##### `EnableLocalDiskEncryption`<sup>Required</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableLocalDiskEncryption"></a>

```go
func EnableLocalDiskEncryption() interface{}
```

- *Type:* interface{}

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.instancePoolId"></a>

```go
func InstancePoolId() *string
```

- *Type:* *string

---

##### `JdbcPort`<sup>Required</sup> <a name="JdbcPort" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.jdbcPort"></a>

```go
func JdbcPort() *f64
```

- *Type:* *f64

---

##### `LastActivityTime`<sup>Required</sup> <a name="LastActivityTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastActivityTime"></a>

```go
func LastActivityTime() *f64
```

- *Type:* *f64

---

##### `LastStateLossTime`<sup>Required</sup> <a name="LastStateLossTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastStateLossTime"></a>

```go
func LastStateLossTime() *f64
```

- *Type:* *f64

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.nodeTypeId"></a>

```go
func NodeTypeId() *string
```

- *Type:* *string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.numWorkers"></a>

```go
func NumWorkers() *f64
```

- *Type:* *f64

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `RuntimeEngine`<sup>Required</sup> <a name="RuntimeEngine" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.runtimeEngine"></a>

```go
func RuntimeEngine() *string
```

- *Type:* *string

---

##### `SingleUserName`<sup>Required</sup> <a name="SingleUserName" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.singleUserName"></a>

```go
func SingleUserName() *string
```

- *Type:* *string

---

##### `SparkConf`<sup>Required</sup> <a name="SparkConf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkConf"></a>

```go
func SparkConf() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkContextId`<sup>Required</sup> <a name="SparkContextId" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkContextId"></a>

```go
func SparkContextId() *f64
```

- *Type:* *f64

---

##### `SparkEnvVars`<sup>Required</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkEnvVars"></a>

```go
func SparkEnvVars() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkVersion"></a>

```go
func SparkVersion() *string
```

- *Type:* *string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `TerminateTime`<sup>Required</sup> <a name="TerminateTime" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminateTime"></a>

```go
func TerminateTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a>

---


### DataDatabricksClusterClusterInfoTerminationReasonOutputReference <a name="DataDatabricksClusterClusterInfoTerminationReasonOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabrickscluster"

datadatabrickscluster.NewDataDatabricksClusterClusterInfoTerminationReasonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClusterClusterInfoTerminationReasonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.codeInput">CodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.codeInput"></a>

```go
func CodeInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClusterClusterInfoTerminationReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a>

---



