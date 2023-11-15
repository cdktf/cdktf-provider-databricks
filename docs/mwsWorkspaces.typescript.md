# `databricks_mws_workspaces`

Refer to the Terraform Registory for docs: [`databricks_mws_workspaces`](https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces).

# `mwsWorkspaces` Submodule <a name="`mwsWorkspaces` Submodule" id="@cdktf/provider-databricks.mwsWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsWorkspaces <a name="MwsWorkspaces" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces databricks_mws_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

new mwsWorkspaces.MwsWorkspaces(scope: Construct, id: string, config: MwsWorkspacesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig">MwsWorkspacesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig">MwsWorkspacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer">putCloudResourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo">putExternalCustomerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig">putGcpManagedNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig">putGkeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken">putToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloud">resetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloudResourceContainer">resetCloudResourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCredentialsId">resetCredentialsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomerManagedKeyId">resetCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetDeploymentName">resetDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetExternalCustomerInfo">resetExternalCustomerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGcpManagedNetworkConfig">resetGcpManagedNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGkeConfig">resetGkeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetIsNoPublicIpEnabled">resetIsNoPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetManagedServicesCustomerManagedKeyId">resetManagedServicesCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetNetworkId">resetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPricingTier">resetPricingTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPrivateAccessSettingsId">resetPrivateAccessSettingsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageConfigurationId">resetStorageConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageCustomerManagedKeyId">resetStorageCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatus">resetWorkspaceStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatusMessage">resetWorkspaceStatusMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceUrl">resetWorkspaceUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCloudResourceContainer` <a name="putCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer"></a>

```typescript
public putCloudResourceContainer(value: MwsWorkspacesCloudResourceContainer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---

##### `putExternalCustomerInfo` <a name="putExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo"></a>

```typescript
public putExternalCustomerInfo(value: MwsWorkspacesExternalCustomerInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---

##### `putGcpManagedNetworkConfig` <a name="putGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig"></a>

```typescript
public putGcpManagedNetworkConfig(value: MwsWorkspacesGcpManagedNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---

##### `putGkeConfig` <a name="putGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig"></a>

```typescript
public putGkeConfig(value: MwsWorkspacesGkeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts"></a>

```typescript
public putTimeouts(value: MwsWorkspacesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

---

##### `putToken` <a name="putToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken"></a>

```typescript
public putToken(value: MwsWorkspacesToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetCloud` <a name="resetCloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloud"></a>

```typescript
public resetCloud(): void
```

##### `resetCloudResourceContainer` <a name="resetCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloudResourceContainer"></a>

```typescript
public resetCloudResourceContainer(): void
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCreationTime"></a>

```typescript
public resetCreationTime(): void
```

##### `resetCredentialsId` <a name="resetCredentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCredentialsId"></a>

```typescript
public resetCredentialsId(): void
```

##### `resetCustomerManagedKeyId` <a name="resetCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomerManagedKeyId"></a>

```typescript
public resetCustomerManagedKeyId(): void
```

##### `resetDeploymentName` <a name="resetDeploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetDeploymentName"></a>

```typescript
public resetDeploymentName(): void
```

##### `resetExternalCustomerInfo` <a name="resetExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetExternalCustomerInfo"></a>

```typescript
public resetExternalCustomerInfo(): void
```

##### `resetGcpManagedNetworkConfig` <a name="resetGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGcpManagedNetworkConfig"></a>

```typescript
public resetGcpManagedNetworkConfig(): void
```

##### `resetGkeConfig` <a name="resetGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGkeConfig"></a>

```typescript
public resetGkeConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsNoPublicIpEnabled` <a name="resetIsNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetIsNoPublicIpEnabled"></a>

```typescript
public resetIsNoPublicIpEnabled(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetManagedServicesCustomerManagedKeyId` <a name="resetManagedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetManagedServicesCustomerManagedKeyId"></a>

```typescript
public resetManagedServicesCustomerManagedKeyId(): void
```

##### `resetNetworkId` <a name="resetNetworkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetNetworkId"></a>

```typescript
public resetNetworkId(): void
```

##### `resetPricingTier` <a name="resetPricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPricingTier"></a>

```typescript
public resetPricingTier(): void
```

##### `resetPrivateAccessSettingsId` <a name="resetPrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPrivateAccessSettingsId"></a>

```typescript
public resetPrivateAccessSettingsId(): void
```

##### `resetStorageConfigurationId` <a name="resetStorageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageConfigurationId"></a>

```typescript
public resetStorageConfigurationId(): void
```

##### `resetStorageCustomerManagedKeyId` <a name="resetStorageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageCustomerManagedKeyId"></a>

```typescript
public resetStorageCustomerManagedKeyId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

##### `resetWorkspaceStatus` <a name="resetWorkspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatus"></a>

```typescript
public resetWorkspaceStatus(): void
```

##### `resetWorkspaceStatusMessage` <a name="resetWorkspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatusMessage"></a>

```typescript
public resetWorkspaceStatusMessage(): void
```

##### `resetWorkspaceUrl` <a name="resetWorkspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceUrl"></a>

```typescript
public resetWorkspaceUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MwsWorkspaces resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

mwsWorkspaces.MwsWorkspaces.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

mwsWorkspaces.MwsWorkspaces.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

mwsWorkspaces.MwsWorkspaces.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

mwsWorkspaces.MwsWorkspaces.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MwsWorkspaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsWorkspaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsWorkspaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MwsWorkspaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainer">cloudResourceContainer</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference">MwsWorkspacesCloudResourceContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfo">externalCustomerInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference">MwsWorkspacesExternalCustomerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfig">gcpManagedNetworkConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference">MwsWorkspacesGcpManagedNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfig">gkeConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference">MwsWorkspacesGkeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference">MwsWorkspacesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.token">token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference">MwsWorkspacesTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudInput">cloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainerInput">cloudResourceContainerInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTimeInput">creationTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsIdInput">credentialsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyIdInput">customerManagedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentNameInput">deploymentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfoInput">externalCustomerInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfigInput">gcpManagedNetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfigInput">gkeConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabledInput">isNoPublicIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyIdInput">managedServicesCustomerManagedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTierInput">pricingTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsIdInput">privateAccessSettingsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationIdInput">storageConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyIdInput">storageCustomerManagedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tokenInput">tokenInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceIdInput">workspaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceNameInput">workspaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusInput">workspaceStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessageInput">workspaceStatusMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrlInput">workspaceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsId">credentialsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyId">customerManagedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentName">deploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabled">isNoPublicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyId">managedServicesCustomerManagedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTier">pricingTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsId">privateAccessSettingsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationId">storageConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyId">storageCustomerManagedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceId">workspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceName">workspaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatus">workspaceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessage">workspaceStatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrl">workspaceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudResourceContainer`<sup>Required</sup> <a name="cloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainer"></a>

```typescript
public readonly cloudResourceContainer: MwsWorkspacesCloudResourceContainerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference">MwsWorkspacesCloudResourceContainerOutputReference</a>

---

##### `externalCustomerInfo`<sup>Required</sup> <a name="externalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfo"></a>

```typescript
public readonly externalCustomerInfo: MwsWorkspacesExternalCustomerInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference">MwsWorkspacesExternalCustomerInfoOutputReference</a>

---

##### `gcpManagedNetworkConfig`<sup>Required</sup> <a name="gcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfig"></a>

```typescript
public readonly gcpManagedNetworkConfig: MwsWorkspacesGcpManagedNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference">MwsWorkspacesGcpManagedNetworkConfigOutputReference</a>

---

##### `gkeConfig`<sup>Required</sup> <a name="gkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfig"></a>

```typescript
public readonly gkeConfig: MwsWorkspacesGkeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference">MwsWorkspacesGkeConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeouts"></a>

```typescript
public readonly timeouts: MwsWorkspacesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference">MwsWorkspacesTimeoutsOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.token"></a>

```typescript
public readonly token: MwsWorkspacesTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference">MwsWorkspacesTokenOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `cloudInput`<sup>Optional</sup> <a name="cloudInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudInput"></a>

```typescript
public readonly cloudInput: string;
```

- *Type:* string

---

##### `cloudResourceContainerInput`<sup>Optional</sup> <a name="cloudResourceContainerInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainerInput"></a>

```typescript
public readonly cloudResourceContainerInput: MwsWorkspacesCloudResourceContainer;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTimeInput"></a>

```typescript
public readonly creationTimeInput: number;
```

- *Type:* number

---

##### `credentialsIdInput`<sup>Optional</sup> <a name="credentialsIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsIdInput"></a>

```typescript
public readonly credentialsIdInput: string;
```

- *Type:* string

---

##### `customerManagedKeyIdInput`<sup>Optional</sup> <a name="customerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyIdInput"></a>

```typescript
public readonly customerManagedKeyIdInput: string;
```

- *Type:* string

---

##### `deploymentNameInput`<sup>Optional</sup> <a name="deploymentNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentNameInput"></a>

```typescript
public readonly deploymentNameInput: string;
```

- *Type:* string

---

##### `externalCustomerInfoInput`<sup>Optional</sup> <a name="externalCustomerInfoInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfoInput"></a>

```typescript
public readonly externalCustomerInfoInput: MwsWorkspacesExternalCustomerInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---

##### `gcpManagedNetworkConfigInput`<sup>Optional</sup> <a name="gcpManagedNetworkConfigInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfigInput"></a>

```typescript
public readonly gcpManagedNetworkConfigInput: MwsWorkspacesGcpManagedNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---

##### `gkeConfigInput`<sup>Optional</sup> <a name="gkeConfigInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfigInput"></a>

```typescript
public readonly gkeConfigInput: MwsWorkspacesGkeConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isNoPublicIpEnabledInput`<sup>Optional</sup> <a name="isNoPublicIpEnabledInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabledInput"></a>

```typescript
public readonly isNoPublicIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedServicesCustomerManagedKeyIdInput`<sup>Optional</sup> <a name="managedServicesCustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyIdInput"></a>

```typescript
public readonly managedServicesCustomerManagedKeyIdInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `pricingTierInput`<sup>Optional</sup> <a name="pricingTierInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTierInput"></a>

```typescript
public readonly pricingTierInput: string;
```

- *Type:* string

---

##### `privateAccessSettingsIdInput`<sup>Optional</sup> <a name="privateAccessSettingsIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsIdInput"></a>

```typescript
public readonly privateAccessSettingsIdInput: string;
```

- *Type:* string

---

##### `storageConfigurationIdInput`<sup>Optional</sup> <a name="storageConfigurationIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationIdInput"></a>

```typescript
public readonly storageConfigurationIdInput: string;
```

- *Type:* string

---

##### `storageCustomerManagedKeyIdInput`<sup>Optional</sup> <a name="storageCustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyIdInput"></a>

```typescript
public readonly storageCustomerManagedKeyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MwsWorkspacesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tokenInput"></a>

```typescript
public readonly tokenInput: MwsWorkspacesToken;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: number;
```

- *Type:* number

---

##### `workspaceNameInput`<sup>Optional</sup> <a name="workspaceNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceNameInput"></a>

```typescript
public readonly workspaceNameInput: string;
```

- *Type:* string

---

##### `workspaceStatusInput`<sup>Optional</sup> <a name="workspaceStatusInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusInput"></a>

```typescript
public readonly workspaceStatusInput: string;
```

- *Type:* string

---

##### `workspaceStatusMessageInput`<sup>Optional</sup> <a name="workspaceStatusMessageInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessageInput"></a>

```typescript
public readonly workspaceStatusMessageInput: string;
```

- *Type:* string

---

##### `workspaceUrlInput`<sup>Optional</sup> <a name="workspaceUrlInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrlInput"></a>

```typescript
public readonly workspaceUrlInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `credentialsId`<sup>Required</sup> <a name="credentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsId"></a>

```typescript
public readonly credentialsId: string;
```

- *Type:* string

---

##### `customerManagedKeyId`<sup>Required</sup> <a name="customerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyId"></a>

```typescript
public readonly customerManagedKeyId: string;
```

- *Type:* string

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentName"></a>

```typescript
public readonly deploymentName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isNoPublicIpEnabled`<sup>Required</sup> <a name="isNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabled"></a>

```typescript
public readonly isNoPublicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedServicesCustomerManagedKeyId`<sup>Required</sup> <a name="managedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyId"></a>

```typescript
public readonly managedServicesCustomerManagedKeyId: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `pricingTier`<sup>Required</sup> <a name="pricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTier"></a>

```typescript
public readonly pricingTier: string;
```

- *Type:* string

---

##### `privateAccessSettingsId`<sup>Required</sup> <a name="privateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsId"></a>

```typescript
public readonly privateAccessSettingsId: string;
```

- *Type:* string

---

##### `storageConfigurationId`<sup>Required</sup> <a name="storageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationId"></a>

```typescript
public readonly storageConfigurationId: string;
```

- *Type:* string

---

##### `storageCustomerManagedKeyId`<sup>Required</sup> <a name="storageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyId"></a>

```typescript
public readonly storageCustomerManagedKeyId: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

---

##### `workspaceStatus`<sup>Required</sup> <a name="workspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatus"></a>

```typescript
public readonly workspaceStatus: string;
```

- *Type:* string

---

##### `workspaceStatusMessage`<sup>Required</sup> <a name="workspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessage"></a>

```typescript
public readonly workspaceStatusMessage: string;
```

- *Type:* string

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrl"></a>

```typescript
public readonly workspaceUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsWorkspacesCloudResourceContainer <a name="MwsWorkspacesCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

const mwsWorkspacesCloudResourceContainer: mwsWorkspaces.MwsWorkspacesCloudResourceContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.property.gcp">gcp</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | gcp block. |

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.property.gcp"></a>

```typescript
public readonly gcp: MwsWorkspacesCloudResourceContainerGcp;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#gcp MwsWorkspaces#gcp}

---

### MwsWorkspacesCloudResourceContainerGcp <a name="MwsWorkspacesCloudResourceContainerGcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

const mwsWorkspacesCloudResourceContainerGcp: mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}.

---

### MwsWorkspacesConfig <a name="MwsWorkspacesConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

const mwsWorkspacesConfig: mwsWorkspaces.MwsWorkspacesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceName">workspaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloud">cloud</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloudResourceContainer">cloudResourceContainer</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | cloud_resource_container block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.creationTime">creationTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.credentialsId">credentialsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customerManagedKeyId">customerManagedKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.deploymentName">deploymentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.externalCustomerInfo">externalCustomerInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | external_customer_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gcpManagedNetworkConfig">gcpManagedNetworkConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | gcp_managed_network_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gkeConfig">gkeConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | gke_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#id MwsWorkspaces#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.isNoPublicIpEnabled">isNoPublicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#location MwsWorkspaces#location}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.managedServicesCustomerManagedKeyId">managedServicesCustomerManagedKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.pricingTier">pricingTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.privateAccessSettingsId">privateAccessSettingsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageConfigurationId">storageConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageCustomerManagedKeyId">storageCustomerManagedKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.token">token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | token block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceId">workspaceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatus">workspaceStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatusMessage">workspaceStatusMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceUrl">workspaceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}.

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}.

---

##### `cloudResourceContainer`<sup>Optional</sup> <a name="cloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloudResourceContainer"></a>

```typescript
public readonly cloudResourceContainer: MwsWorkspacesCloudResourceContainer;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

cloud_resource_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#cloud_resource_container MwsWorkspaces#cloud_resource_container}

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}.

---

##### `credentialsId`<sup>Optional</sup> <a name="credentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.credentialsId"></a>

```typescript
public readonly credentialsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}.

---

##### `customerManagedKeyId`<sup>Optional</sup> <a name="customerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customerManagedKeyId"></a>

```typescript
public readonly customerManagedKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}.

---

##### `deploymentName`<sup>Optional</sup> <a name="deploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.deploymentName"></a>

```typescript
public readonly deploymentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}.

---

##### `externalCustomerInfo`<sup>Optional</sup> <a name="externalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.externalCustomerInfo"></a>

```typescript
public readonly externalCustomerInfo: MwsWorkspacesExternalCustomerInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

external_customer_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#external_customer_info MwsWorkspaces#external_customer_info}

---

##### `gcpManagedNetworkConfig`<sup>Optional</sup> <a name="gcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gcpManagedNetworkConfig"></a>

```typescript
public readonly gcpManagedNetworkConfig: MwsWorkspacesGcpManagedNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

gcp_managed_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#gcp_managed_network_config MwsWorkspaces#gcp_managed_network_config}

---

##### `gkeConfig`<sup>Optional</sup> <a name="gkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gkeConfig"></a>

```typescript
public readonly gkeConfig: MwsWorkspacesGkeConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

gke_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#gke_config MwsWorkspaces#gke_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#id MwsWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isNoPublicIpEnabled`<sup>Optional</sup> <a name="isNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.isNoPublicIpEnabled"></a>

```typescript
public readonly isNoPublicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#location MwsWorkspaces#location}.

---

##### `managedServicesCustomerManagedKeyId`<sup>Optional</sup> <a name="managedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.managedServicesCustomerManagedKeyId"></a>

```typescript
public readonly managedServicesCustomerManagedKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}.

---

##### `pricingTier`<sup>Optional</sup> <a name="pricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.pricingTier"></a>

```typescript
public readonly pricingTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}.

---

##### `privateAccessSettingsId`<sup>Optional</sup> <a name="privateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.privateAccessSettingsId"></a>

```typescript
public readonly privateAccessSettingsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}.

---

##### `storageConfigurationId`<sup>Optional</sup> <a name="storageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageConfigurationId"></a>

```typescript
public readonly storageConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}.

---

##### `storageCustomerManagedKeyId`<sup>Optional</sup> <a name="storageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageCustomerManagedKeyId"></a>

```typescript
public readonly storageCustomerManagedKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MwsWorkspacesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#timeouts MwsWorkspaces#timeouts}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.token"></a>

```typescript
public readonly token: MwsWorkspacesToken;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#token MwsWorkspaces#token}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}.

---

##### `workspaceStatus`<sup>Optional</sup> <a name="workspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatus"></a>

```typescript
public readonly workspaceStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}.

---

##### `workspaceStatusMessage`<sup>Optional</sup> <a name="workspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatusMessage"></a>

```typescript
public readonly workspaceStatusMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}.

---

##### `workspaceUrl`<sup>Optional</sup> <a name="workspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceUrl"></a>

```typescript
public readonly workspaceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}.

---

### MwsWorkspacesExternalCustomerInfo <a name="MwsWorkspacesExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

const mwsWorkspacesExternalCustomerInfo: mwsWorkspaces.MwsWorkspacesExternalCustomerInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserEmail">authoritativeUserEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserFullName">authoritativeUserFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.customerName">customerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}. |

---

##### `authoritativeUserEmail`<sup>Required</sup> <a name="authoritativeUserEmail" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserEmail"></a>

```typescript
public readonly authoritativeUserEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}.

---

##### `authoritativeUserFullName`<sup>Required</sup> <a name="authoritativeUserFullName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserFullName"></a>

```typescript
public readonly authoritativeUserFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}.

---

##### `customerName`<sup>Required</sup> <a name="customerName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.customerName"></a>

```typescript
public readonly customerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}.

---

### MwsWorkspacesGcpManagedNetworkConfig <a name="MwsWorkspacesGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

const mwsWorkspacesGcpManagedNetworkConfig: mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterPodIpRange">gkeClusterPodIpRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterServiceIpRange">gkeClusterServiceIpRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.subnetCidr">subnetCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}. |

---

##### `gkeClusterPodIpRange`<sup>Required</sup> <a name="gkeClusterPodIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterPodIpRange"></a>

```typescript
public readonly gkeClusterPodIpRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}.

---

##### `gkeClusterServiceIpRange`<sup>Required</sup> <a name="gkeClusterServiceIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterServiceIpRange"></a>

```typescript
public readonly gkeClusterServiceIpRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}.

---

##### `subnetCidr`<sup>Required</sup> <a name="subnetCidr" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.subnetCidr"></a>

```typescript
public readonly subnetCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}.

---

### MwsWorkspacesGkeConfig <a name="MwsWorkspacesGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

const mwsWorkspacesGkeConfig: mwsWorkspaces.MwsWorkspacesGkeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.connectivityType">connectivityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.masterIpRange">masterIpRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}. |

---

##### `connectivityType`<sup>Required</sup> <a name="connectivityType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.connectivityType"></a>

```typescript
public readonly connectivityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}.

---

##### `masterIpRange`<sup>Required</sup> <a name="masterIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.masterIpRange"></a>

```typescript
public readonly masterIpRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}.

---

### MwsWorkspacesTimeouts <a name="MwsWorkspacesTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

const mwsWorkspacesTimeouts: mwsWorkspaces.MwsWorkspacesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#create MwsWorkspaces#create}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#read MwsWorkspaces#read}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#update MwsWorkspaces#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#create MwsWorkspaces#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#read MwsWorkspaces#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#update MwsWorkspaces#update}.

---

### MwsWorkspacesToken <a name="MwsWorkspacesToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

const mwsWorkspacesToken: mwsWorkspaces.MwsWorkspacesToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.lifetimeSeconds">lifetimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenId">tokenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenValue">tokenValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}.

---

##### `lifetimeSeconds`<sup>Optional</sup> <a name="lifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.lifetimeSeconds"></a>

```typescript
public readonly lifetimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}.

---

##### `tokenId`<sup>Optional</sup> <a name="tokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenId"></a>

```typescript
public readonly tokenId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}.

---

##### `tokenValue`<sup>Optional</sup> <a name="tokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenValue"></a>

```typescript
public readonly tokenValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsWorkspacesCloudResourceContainerGcpOutputReference <a name="MwsWorkspacesCloudResourceContainerGcpOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

new mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MwsWorkspacesCloudResourceContainerGcp;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---


### MwsWorkspacesCloudResourceContainerOutputReference <a name="MwsWorkspacesCloudResourceContainerOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

new mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp">putGcp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGcp` <a name="putGcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp"></a>

```typescript
public putGcp(value: MwsWorkspacesCloudResourceContainerGcp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcp">gcp</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference">MwsWorkspacesCloudResourceContainerGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcpInput">gcpInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcp"></a>

```typescript
public readonly gcp: MwsWorkspacesCloudResourceContainerGcpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference">MwsWorkspacesCloudResourceContainerGcpOutputReference</a>

---

##### `gcpInput`<sup>Optional</sup> <a name="gcpInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcpInput"></a>

```typescript
public readonly gcpInput: MwsWorkspacesCloudResourceContainerGcp;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MwsWorkspacesCloudResourceContainer;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---


### MwsWorkspacesExternalCustomerInfoOutputReference <a name="MwsWorkspacesExternalCustomerInfoOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

new mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmailInput">authoritativeUserEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullNameInput">authoritativeUserFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerNameInput">customerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmail">authoritativeUserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullName">authoritativeUserFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerName">customerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authoritativeUserEmailInput`<sup>Optional</sup> <a name="authoritativeUserEmailInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmailInput"></a>

```typescript
public readonly authoritativeUserEmailInput: string;
```

- *Type:* string

---

##### `authoritativeUserFullNameInput`<sup>Optional</sup> <a name="authoritativeUserFullNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullNameInput"></a>

```typescript
public readonly authoritativeUserFullNameInput: string;
```

- *Type:* string

---

##### `customerNameInput`<sup>Optional</sup> <a name="customerNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerNameInput"></a>

```typescript
public readonly customerNameInput: string;
```

- *Type:* string

---

##### `authoritativeUserEmail`<sup>Required</sup> <a name="authoritativeUserEmail" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmail"></a>

```typescript
public readonly authoritativeUserEmail: string;
```

- *Type:* string

---

##### `authoritativeUserFullName`<sup>Required</sup> <a name="authoritativeUserFullName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullName"></a>

```typescript
public readonly authoritativeUserFullName: string;
```

- *Type:* string

---

##### `customerName`<sup>Required</sup> <a name="customerName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerName"></a>

```typescript
public readonly customerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MwsWorkspacesExternalCustomerInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---


### MwsWorkspacesGcpManagedNetworkConfigOutputReference <a name="MwsWorkspacesGcpManagedNetworkConfigOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

new mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRangeInput">gkeClusterPodIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRangeInput">gkeClusterServiceIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidrInput">subnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRange">gkeClusterPodIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRange">gkeClusterServiceIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidr">subnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gkeClusterPodIpRangeInput`<sup>Optional</sup> <a name="gkeClusterPodIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRangeInput"></a>

```typescript
public readonly gkeClusterPodIpRangeInput: string;
```

- *Type:* string

---

##### `gkeClusterServiceIpRangeInput`<sup>Optional</sup> <a name="gkeClusterServiceIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRangeInput"></a>

```typescript
public readonly gkeClusterServiceIpRangeInput: string;
```

- *Type:* string

---

##### `subnetCidrInput`<sup>Optional</sup> <a name="subnetCidrInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidrInput"></a>

```typescript
public readonly subnetCidrInput: string;
```

- *Type:* string

---

##### `gkeClusterPodIpRange`<sup>Required</sup> <a name="gkeClusterPodIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRange"></a>

```typescript
public readonly gkeClusterPodIpRange: string;
```

- *Type:* string

---

##### `gkeClusterServiceIpRange`<sup>Required</sup> <a name="gkeClusterServiceIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRange"></a>

```typescript
public readonly gkeClusterServiceIpRange: string;
```

- *Type:* string

---

##### `subnetCidr`<sup>Required</sup> <a name="subnetCidr" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidr"></a>

```typescript
public readonly subnetCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MwsWorkspacesGcpManagedNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---


### MwsWorkspacesGkeConfigOutputReference <a name="MwsWorkspacesGkeConfigOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

new mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityTypeInput">connectivityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRangeInput">masterIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityType">connectivityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRange">masterIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectivityTypeInput`<sup>Optional</sup> <a name="connectivityTypeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityTypeInput"></a>

```typescript
public readonly connectivityTypeInput: string;
```

- *Type:* string

---

##### `masterIpRangeInput`<sup>Optional</sup> <a name="masterIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRangeInput"></a>

```typescript
public readonly masterIpRangeInput: string;
```

- *Type:* string

---

##### `connectivityType`<sup>Required</sup> <a name="connectivityType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityType"></a>

```typescript
public readonly connectivityType: string;
```

- *Type:* string

---

##### `masterIpRange`<sup>Required</sup> <a name="masterIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRange"></a>

```typescript
public readonly masterIpRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MwsWorkspacesGkeConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---


### MwsWorkspacesTimeoutsOutputReference <a name="MwsWorkspacesTimeoutsOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

new mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MwsWorkspacesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

---


### MwsWorkspacesTokenOutputReference <a name="MwsWorkspacesTokenOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer"></a>

```typescript
import { mwsWorkspaces } from '@cdktf/provider-databricks'

new mwsWorkspaces.MwsWorkspacesTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetLifetimeSeconds">resetLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenId">resetTokenId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenValue">resetTokenValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetLifetimeSeconds` <a name="resetLifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetLifetimeSeconds"></a>

```typescript
public resetLifetimeSeconds(): void
```

##### `resetTokenId` <a name="resetTokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenId"></a>

```typescript
public resetTokenId(): void
```

##### `resetTokenValue` <a name="resetTokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenValue"></a>

```typescript
public resetTokenValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSecondsInput">lifetimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenIdInput">tokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValueInput">tokenValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSeconds">lifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenId">tokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValue">tokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `lifetimeSecondsInput`<sup>Optional</sup> <a name="lifetimeSecondsInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSecondsInput"></a>

```typescript
public readonly lifetimeSecondsInput: number;
```

- *Type:* number

---

##### `tokenIdInput`<sup>Optional</sup> <a name="tokenIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenIdInput"></a>

```typescript
public readonly tokenIdInput: string;
```

- *Type:* string

---

##### `tokenValueInput`<sup>Optional</sup> <a name="tokenValueInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValueInput"></a>

```typescript
public readonly tokenValueInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `lifetimeSeconds`<sup>Required</sup> <a name="lifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSeconds"></a>

```typescript
public readonly lifetimeSeconds: number;
```

- *Type:* number

---

##### `tokenId`<sup>Required</sup> <a name="tokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenId"></a>

```typescript
public readonly tokenId: string;
```

- *Type:* string

---

##### `tokenValue`<sup>Required</sup> <a name="tokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValue"></a>

```typescript
public readonly tokenValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MwsWorkspacesToken;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---



